#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <U8x8lib.h>
#define LED 25
U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 15, /* data=*/ 4, /* reset=*/ 16);
const char* ssid = "IT_NET";
const char* password =  "dirtjump2018";
const char* linkServer = "http://10.0.0.5:80/API/Reports/PulsoHidrometro";
IPAddress ip(10, 0, 0, 8); //IP da rede
IPAddress gateway(10, 0, 0, 1);
IPAddress subnet(255, 255, 255, 0);
int pin = 17;
int contagem = 0;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(pin, INPUT);
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  WiFi.begin(ssid, password);
  WiFi.config(ip, gateway, subnet);

  while (WiFi.status() != WL_CONNECTED) { //Check for the connection
    delay(500);
    Serial.println("Connecting..");
  }
  u8x8.drawString(0, 0,  ssid);
  u8x8.drawString(0, 1, "Conectado");
}

void loop() {
  u8x8.clear();
  u8x8.drawString(0, 2, "Aguardando");
  if (pulseInLong(pin, HIGH)) {
    u8x8.clear();
    digitalWrite(LED, HIGH);
    contagem++;
    digitalWrite(LED, LOW);
    if (contagem == 10) {
      Pulso();
      contagem = 0;
    }
  }
}

void Pulso() {
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status

    HTTPClient http;
    http.begin(linkServer);  //Specify destination for HTTP request
    http.addHeader("Content-Type", "application/json");             //Header json
    u8x8.clear();
    u8x8.drawString(0, 2, "Pulso Enviado");
    u8x8.drawString(0, 3, "IdLora 01");
    int httpResponseCode = http.POST("{""IdLora:""1}");   //Envia o campo do banco com o numero do lora

    if (httpResponseCode > 0) {

      Serial.println(httpResponseCode);   //Print return code

    } else {

      Serial.print("Error on sending request: ");
      Serial.println(httpResponseCode);

    }

    http.end();  //Free resources

  } else {

    Serial.println("Error in WiFi connection");

  }
}
