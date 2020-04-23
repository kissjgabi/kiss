---
layout: post
author: kovax
category: programming
title: welcome to java - 01 read datas from file
meta: java read file
shortcontent: java read file
tag: [java, computing]
image: javaProgLang.jpg
subtitle: Sample in Netbeans IDE
sitemap:
    lastmod: 2020-04-22
    priority: 0.75
    changefreq: '1 month'
    exclude: 'no'
---

## The MVP design pattern

Model View Presenter, or MVP, is a user interface design pattern which enables separation of the user interface from its presentation logic.  
The MVP structure simplifies the project life cycle.  

        package aControl;

        import aConsole.OutputConsole;
        import aData.ReadFromFile;
        import java.util.ArrayList;
        import java.util.List;

        public class Presenter {

            private static final String DATA_FILE = "/aData/datas.txt";
            private static final ReadFromFile READ = new ReadFromFile();
            private static final OutputConsole OUT = new OutputConsole();
            private static List<String> datalines;

            /**
             * @param args the command line arguments
             */
            public static void main(String[] args) {
                datalines = new ArrayList<>();
                datalines = READ.dataLines(Presenter.DATA_FILE);
                OUT.writeln("> datas.txt has " + datalines.size() + " lines.");
            }
        }

.  

.  

        package aData;

        import java.io.IOException;
        import java.io.InputStream;
        import java.util.ArrayList;
        import java.util.List;
        import java.util.Scanner;

        public class ReadFromFile {

            private final List<String> LINES;
            private final String CODE_PAGE = "UTF-8";

            public ReadFromFile() {
                LINES = new ArrayList<>();
            }

            public List<String> dataLines(String url) {
                try (InputStream ins = this.getClass().getResourceAsStream(url);
                        Scanner in = new Scanner(ins, CODE_PAGE)) {
                    while (in.hasNext()) {
                        LINES.add(in.nextLine());
                    }
                } catch (IOException ex) {
                    System.out.println("> Error: " + ex.getMessage());
                }
                return LINES;
            }
        }

.  

.  

        package aConsole;

        public class OutputConsole {

            public OutputConsole() {
            }

            public void write(String str) {
                System.out.print(str);
            }

            public void writeln(String str) {
                System.out.println(str);
            }
        }

.  



