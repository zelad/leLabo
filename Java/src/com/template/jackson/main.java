package com.template.jackson;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.lang.Class;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class main {
	
//	public static void listFilesForFolder(final File folder) {
//	    for (final File fileEntry : folder.listFiles()) {
//	        if (fileEntry.isDirectory()) {
//	            listFilesForFolder(fileEntry);
//	        } else {
//	            System.out.println(fileEntry.getName());
//	        }
//	    }
//	}
	
	public static void main(String[] args) {

//		final File folder = new File("./src");
//		listFilesForFolder(folder);
/**
 * Version "Jackson"
 */
		ObjectMapper mapper = new ObjectMapper();
		
	/**
	 * Version "exemple avancé"
	 * http://www.studytrails.com/java/json/java-jackson-Data-Binding.jsp
	 */
//		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
//		Albums albums;
//		try {
//			albums = mapper.readValue(new File("./src/v2.json"), Albums.class);
//	        Dataset[] datasets = albums.dataset;
//	        for (Dataset dataset : datasets) {
//	            System.out.println(dataset.album_title);
//	        }
//		} catch (IOException e2) {
//			// TODO Auto-generated catch block
//			e2.printStackTrace();
//		}
	/**
	 * Adaptation à ce que j'ai besoins, de ci-dessous qui fonctionne très bien!
	 */
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		
		Cards cards;
		try {
			cards = mapper.readValue(new File("./src/cardsInGame.json"), Cards.class);
			Card[] allCards = cards.cards;
			for (Card oneCard : allCards) {
				System.out.println(oneCard);
			}
		} catch (Exception e2) {
			e2.printStackTrace();
		}
	/**
	 * Version d'exemple mais avec une lecture foireuse
	 * intéressant pour le parcourt d un LinkedHashMap d'ArrayList!! Oo
	 */
//		try {
//			List<MyValue> values = mapper.readValue(new File("./src/data.json"), List.class);
//			System.out.println(values);
//			for (Iterator iterator = values.iterator(); iterator.hasNext();) {
//				LinkedHashMap<String, Integer> linkedHM = (LinkedHashMap<String, Integer>) iterator.next();
//				for (Map.Entry<String, Integer> entry : linkedHM.entrySet()) {
//					System.out.println(entry.getKey());
//					System.out.println(entry.getValue());
//				}
//			}
//		} catch (IOException e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		}
		
	/**
	 *Autre Version fonctionnel se raprochant des travaux de HParty
	 */
//		try {
//			JsonNode arrayN = mapper.readTree(new File("./src/unJson.json"));
//			for (JsonNode jsonNode : arrayN) {
//				System.out.println(jsonNode);
//			}
//			
//			System.out.println("fin");
////TODO @Ici: y a plus qu a mettre "arrayN" dans une Map d'objet "Card"?!
//
//		} catch (JsonParseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (JsonMappingException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}

/**
 * En version "Simple-Json"		
 */
//		JSONParser parser = new JSONParser();
//		 
//        try {
// 
//            Object obj = parser.parse(new FileReader(
//                    "./src/unJson.json"));
// 
//            JSONObject jsonObject = (JSONObject) obj;
//            
//            JSONArray cards = (JSONArray) jsonObject.get("cards");
//            Object uneCarte = cards.get(0);
//            Object jsonRecherche = JSONValue.parse("{\"name\":\"ScriptKiddie\"}");//'name':'ScriptKiddie'
//            int index = cards.indexOf(uneCarte);
//            System.out.println(index);
//            
//            
//            String name = (String) jsonObject.get("Name");
//            String author = (String) jsonObject.get("Author");
//            JSONArray companyList = (JSONArray) jsonObject.get("Company List");
// 
////            System.out.println("Name: " + name);
////            System.out.println("Author: " + author);
////            System.out.println("\nCompany List:");
////            Iterator<String> iterator = companyList.iterator();
////            while (iterator.hasNext()) {
////                System.out.println(iterator.next());
////            }
// 
//        } catch (Exception e) {
//            e.printStackTrace();
//        }

	}

}
