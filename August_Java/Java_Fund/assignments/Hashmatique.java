import java.util.HashMap;
import java.util.Set;
public class Hashmatique {
    public static void main( String args[]){
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Big Bopper", "Big Bopper and a Slobberknoacker...");
        trackList.put("Don't Stop", "If you want to stop just don't...");
        trackList.put("Happy Birthday", "This song is trademarked and not available for the public...");
        trackList.put("Come down", "YEs LaWD...");
        String track = trackList.get("Big Bopper");
        System.out.println(track);

        Set<String> keys = trackList.keySet();
        for (String key : keys){
            System.out.println(key + " : " + trackList.get(key));
        }
}
}