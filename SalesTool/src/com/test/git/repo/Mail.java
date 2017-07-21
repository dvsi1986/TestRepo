package com.test.git.repo;

public class Mail {

	public static void main(String[] args) {
		SalesData s = new SalesData();

		dispayGreetings();
		System.out.println("-----------");
		s.displayData();
	}

	private static void dispayGreetings() {
		System.out.println("HELLO	 HAPPY SALES PEOPLE");
		System.out.println("THIS APP SHOWS SALES DATA");
		System.out.println("**************************");
		System.out.println("I would like to add more code !!");
		System.out.println("################################");
		System.out.println("After Checkout a project from git..");
	}

}
