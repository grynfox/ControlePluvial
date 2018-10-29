#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <U8x8lib.h>
U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 15, /* data=*/ 4, /* reset=*/ 16);
const char* ssid = "IT_NET";
const char* password =  "dirtjump2018";
IPAddress ip(10,0,0,8); //IP da rede
IPAddress gateway(10,0,0,1);
IPAddress subnet(255,255,255,0);
int pin = 17;

void setup() {
  pinMode(pin, INPUT);
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  delay(1000);   
 
  WiFi.begin(ssid, password);
  WiFi.config(ip,gateway,subnet); 
 
  while (WiFi.status() != WL_CONNECTED) { //Check for the connection
    delay(500);
    Serial.println("Connecting..");
  }
  u8x8.drawString(0, 0,  ssid);
  u8x8.drawString(0,1, "Conectado");  
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}
 
void loop() {
 if(pulseIn(pin, HIGH)){
  u8x8.clear();
  Pulso();
  digitalWrite(pin, LOW);
  }
}

void Pulso() {
  if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
 
   HTTPClient http;   
 
   http.begin("http://10.0.0.2:80/API/Reports/PulsoHidrometro");  //Specify destination for HTTP request
   http.addHeader("Content-Type", "application/json");             //Specify content-type header
   u8x8.drawString(0,2, "Pulso Enviado");
   delay(100);
   int httpResponseCode = http.POST("{""IdLora:""2}");   //Send the actual POST request
 
   if(httpResponseCode>0){
 
    Serial.println(httpResponseCode);   //Print return code
 
   }else{
 
    Serial.print("Error on sending request: ");
    Serial.println(httpResponseCode);
 
   }
 
   http.end();  //Free resources
 
 }else{
 
    Serial.println("Error in WiFi connection");   
 
 }
 u8x8.clear();
 u8x8.drawString(0,2, "Aguardando");
  }
