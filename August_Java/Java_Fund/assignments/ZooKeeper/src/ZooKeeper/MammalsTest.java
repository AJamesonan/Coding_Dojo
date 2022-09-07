package ZooKeeper;

public class MammalsTest {

	public static void main(String[] args) {
		
		Gorilla ape1 = new Gorilla();
		
		ape1.throwSomething();
		ape1.throwSomething();
		ape1.throwSomething();
		
		ape1.eatBananna();
		ape1.eatBananna();
		System.out.println(ape1.getEnergyLevel());
		ape1.climb();
		
		System.out.println(ape1.getEnergyLevel());
		
		Bat bat = new Bat();
		
		bat.attackTown();
		bat.attackTown();
		bat.attackTown();
		
		bat.eatHumans();
		bat.eatHumans();
		
		bat.fly();
		bat.fly();
		
	}

}
