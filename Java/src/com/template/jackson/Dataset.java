package com.template.jackson;

import java.util.HashMap;
import java.util.Map;

public class Dataset {
    public String album_id;
    public String album_title;
    public Map<String , Object> otherProperties = new HashMap<String , Object>();
}
