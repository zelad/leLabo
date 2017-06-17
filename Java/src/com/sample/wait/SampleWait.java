package com.sample.wait;

import java.util.concurrent.TimeUnit;

public class SampleWait {

	public static void main(String[] args) {
		for (int i = 0; i < 5; i++) {
			try {
				TimeUnit.SECONDS.sleep(1);
			} catch (InterruptedException e) {
				e.printStackTrace();
				System.err.println("erreur dans le sleep :p");
			}
			System.out.println("Attente:\n"+i+" seconde...");
		}

	}

}
