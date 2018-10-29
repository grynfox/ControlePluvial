  
#include <HTTPClient.h>
#include <WiFi.h>
#include <ArduinoJson.h>
#include <U8x8lib.h>
U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 15, /* data=*/ 4, /* reset=*/ 16);
const char* ssid = "IT_NET";
const char* password =  "dirtjump2018";
void setup() {
 
  Serial.begin(115200);    
  u8x8.begin();
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  WiFi.begin(ssid, password);   //WiFi connection
 u8x8.drawString(0, 0, ssid); 
  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion
    delay(2000);
    u8x8.clear();
    Serial.println("Waiting for connection");
 
  }
 
}
 
void loop() {

  Pulso();
  delay(10000);
 
}

void Pulso (){
  
    if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
    
      StaticJsonBuffer<300> JSONbuffer;   //Declaring static JSON buffer
      JsonObject& JSONencoder = JSONbuffer.createObject(); 
   
      JsonArray& values = JSONencoder.createNestedArray("IdLora"); //JSON array
      values.add("1"); 
      char JSONmessageBuffer[300];
    JSONencoder.prettyPrintTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
    Serial.println(JSONmessageBuffer);
    u8x8.drawString(0, 0, JSONmessageBuffer); 
    HTTPClient http;    //Declare object of class HTTPClient
 
    http.begin("http://192.168.43.10:80/API/Reports/PulsoHidrometro");      //Specify request destination
    http.addHeader("Content-Type", "application/json");  //Specify content-type header
    
    int httpCode = http.POST(JSONmessageBuffer);   //Send the request
    String payload = http.getString();                                        //Get the response payload
    u8x8.clear();
    u8x8.drawString(0, 0, "Dados Enviados"); 
    Serial.println(httpCode);   //Print HTTP return code 
    Serial.println(payload);    //Print request response payload
 
    http.end();  //Close connection
 
  } else {
    u8x8.drawString(0, 0, "Error in WiFi connection"); 
    Serial.println("Error in WiFi connection");
 
  }
  
  }
