import java.util.Date;

public class AlfredQuotes {
    public String basicGreeting(){
        return "Hello, lovely to see you. How are you?";
    }
    public String guestGreeting(String name) {
        String greeting = String.format("Good day %s. Whats good?", name);
        return greeting;
    }
    
    public String dateAnnouncement(){
            Date date = new Date();
        return "The Date is " + date;
    }
    
    public String respondBeforeAlexis(String conversation) {
        String responce = "Get outta here with that wanna be influencer trash";
        return responce;
    }
}
