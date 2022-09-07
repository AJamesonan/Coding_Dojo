package ZooKeeper;

public class Gorilla extends Mammal{
	
	public void throwSomething() {
		int energy = this.getEnergyLevel()-5;
		this.setEnergyLevel(energy);
		System.out.println("What an arm! Energy level is now" + energy);
	}
	
	public void eatBananna() {
	int energy = this.getEnergyLevel()+10;
	this.setEnergyLevel(energy);
	System.out.println("Yum yum in the tum. +10 energy");
	}
	
	public void climb() {
		int energy = this.getEnergyLevel()-10;
		this.setEnergyLevel(energy);
		System.out.println("This guy makes Adam Ondra look like a chump. -10 energy");
	}
}
