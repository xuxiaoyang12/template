package com.xuxy.demo.nio;

import java.io.IOException;

public class BClient {
    public static void main(String[] args) throws IOException {
        new NioClient().start("Bclient:");
    }
}
