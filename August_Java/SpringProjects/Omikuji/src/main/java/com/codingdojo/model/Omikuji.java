package com.codingdojo.model;

public class Omikuji {
	private String city;
	private String person;
	private String profession;
	private String livingThing;
	private String somethingNice;
	public Omikuji(String city, String person, String profession, String livingThing, String somethingNice) {
		super();
		this.city = city;
		this.person = person;
		this.profession = profession;
		this.livingThing = livingThing;
		this.somethingNice = somethingNice;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPerson() {
		return person;
	}
	public void setPerson(String person) {
		this.person = person;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getLivingThing() {
		return livingThing;
	}
	public void setLivingThing(String livingThing) {
		this.livingThing = livingThing;
	}
	public String getSomethingNice() {
		return somethingNice;
	}
	public void setSomethingNice(String somethingNice) {
		this.somethingNice = somethingNice;
	}
}
