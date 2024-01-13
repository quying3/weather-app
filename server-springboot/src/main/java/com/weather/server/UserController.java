package com.weather.server;

import java.util.Collections;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class UserController {

    @RequestMapping(value = "hello",method = RequestMethod.GET )
    public String hello(){
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://api.github.com/users"; 
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<User[]> response = restTemplate.exchange(url, HttpMethod.GET, entity, User[].class);
        // ResponseEntity<User> response = restTemplate.getForEntity(url,User.class);
        User[] users = response.getBody();
        String result = "";
        for (int i=0;i<users.length;i++){
            result +="<p>" + users[i].getId() + " " + users[i].getLogin() + "</p>";
        }
        return result;
    }
}


