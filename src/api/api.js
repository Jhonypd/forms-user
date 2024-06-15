import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { orderByName } from "../utils/station-code";

export const fetchPrevisao = async (airportCode) => {
    try {
      const airport = orderByName.find((airport) => airport.Sigla === airportCode);
  
      if (!airport) {
        throw new Error("Airport not found");
      }
  
      const { Longitude: longitude, Latitude: latitude } = airport;
  
      const response = await axios.get(
        `http://servicos.cptec.inpe.br/XML/cidade/7dias/${latitude}/${longitude}/previsaoLatLon.xml`
      );
  
      const parser = new XMLParser();
      const result = parser.parse(response.data);
      
      // Verifica se o objeto retornado possui a estrutura esperada
      if (!result || !result.cidade || !result.cidade.previsao) {
        throw new Error("Invalid response format");
      }
      
      // Obtém as informações da cidade
      const { nome, uf, atualizacao } = result.cidade;
      
      // Obtém as previsões de tempo
      const previsoes = Array.isArray(result.cidade.previsao) ? result.cidade.previsao : [result.cidade.previsao];
      
      return previsoes; 
    } catch (error) {
      console.error("Error fetching weather forecast:", error);
      return [];
    }
  };

export const fetchCurrentConditions = async (airportCode) => {
  try {
    const response = await axios.post(
      `http://servicos.cptec.inpe.br/XML/estacao/${airportCode}/condicoesAtuais.xml`
    );
    const parser = new XMLParser();
    const result = parser.parse(response.data);

    const metar = result.metar;

    return {
      codigo: metar.codigo,
      atualizacao: metar.atualizacao,
      pressao: metar.pressao,
      temperatura: metar.temperatura,
      tempo: metar.tempo,
      tempo_desc: metar.tempo_desc,
      umidade: metar.umidade,
      vento_dir: metar.vento_dir,
      vento_int: metar.vento_int,
      visibilidade: metar.visibilidade,
    };
  } catch (error) {
    console.error("Error fetching current conditions:", error);
    return null;
  }
};
