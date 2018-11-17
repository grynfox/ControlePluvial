#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <U8x8lib.h>
U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 15, /* data=*/ 4, /* reset=*/ 16);
const char* ssid = "PUCPCALDAS";
const char* password =  "dirtjump2018";
const char* linkServer = "http://172.16.5.175:80/API/Reports/PulsoHidrometro"; //caminho referente ao BD
IPAddress ip(10, 0, 0, 8); //IP da rede
IPAddress gateway(10, 0, 0, 1);
IPAddress subnet(255, 255, 255, 0);
int pin = 0; // Pino usado para leitura o sensor do hidrometro
unsigned long readPulso;

void setup() {
  pinMode(pin, INPUT);
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  WiFi.begin(ssid);
  //WiFi.config(ip, gateway, subnet);  //Habilita as configurações de Rede 

  while (WiFi.status() != WL_CONNECTED) { //Check for the connection
    delay(500);
    u8x8.clear();
    u8x8.drawString(0, 1, "Conectando");
  }
  u8x8.drawString(0, 0,  ssid);
  u8x8.drawString(0, 1, "Conectado");
}

void loop() {
     readPulso = pulseIn(pin, HIGH);
  if (readPulso>0) {

        Pulso();
        u8x8.clear();
        u8x8.drawString(0, 2, "Aguardando");
  }
}

void Pulso() {
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status

    HTTPClient http;
    http.begin(linkServer);  //Specify destination for HTTP request
    http.addHeader("Content-Type", "application/json");             //Define o tipo do Header a ser enviado
    u8x8.drawString(0, 2, "Pulso Enviado"); 
    u8x8.drawString(0, 3, "IdLora 01");
    int httpResponseCode = http.POST("{""IdLora:""1}");   //Envia o campo do banco com o numero do modulo ESP32 

    if (httpResponseCode > 0) {
      
      Serial.println(httpResponseCode); // Mostra o codigo com o retorno da requisição

    } else {
      u8x8.clear();
      u8x8.drawString(0, 0, "Request Error");
      Serial.println(httpResponseCode);
    }

    http.end();  //Free resources

  } else {
    u8x8.clear();
    u8x8.drawString(0, 0, "Erro de");
    u8x8.drawString(0, 1, "Conexao");

  }
}
