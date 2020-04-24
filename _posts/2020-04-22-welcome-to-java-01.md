---
layout: post
author: kovax
category: programming
title: welcome to java MVP - 01 read datas from file
meta: mvp java read file
shortcontent: mvp java read file
tag: [java, computing]
image: javaProgLang.jpg
subtitle: simple sample in Netbeans IDE
sitemap:
    lastmod: 2020-04-22
    priority: 0.75
    changefreq: '1 month'
    exclude: 'no'
---

## The MVP design pattern

Model View Presenter, or MVP, is a user interface design pattern which enables separation of the user interface from its presentation logic.  
The MVP structure simplifies the project life cycle.  
the long-term benefits of using this pattern will:
-   Make code more maintainable.
-   Enable parallel development for team members (the separation allows developers to work independently for UI, business logic, and data access)
-   Provide code reusability (web, windows form, mobile, etc)
-   Enforce a standard over the entire project
-   Make it easy to write unit tests


## The presenter: aControl package

The presenter receives all events from the view layer.  It processes the requests and sends the response and updates back to the view.

File: Presenter.java

```java
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
```

## The model: aData package

The model represents the business objects and logic for the data that is being manipulated. Any validation, computing, or data retrieving implements the presenter on the model.

File: ReadFromFile.java

```java
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
```

File: datas.txt

        Year      Date/Time of Perihelion   Distance     Relative to Mean Per.    Date/Time of Aphelion   Distance     Relative to Mean Ap.    Perihelion Interval
        2001     Jan 04  08:52   0.9832860 AU    -582 km      Jul 04  13:37   1.0166426 AU  -10122 km     367.15 days
        2002     Jan 02  14:09   0.9832898 AU     -20 km      Jul 06  03:47   1.0166882 AU   -3304 km     363.22 days
        2003     Jan 04  05:02   0.9833204 AU    4556 km      Jul 04  05:40   1.0167282 AU    2683 km     366.62 days
        2004     Jan 04  17:42   0.9832648 AU   -3752 km      Jul 05  10:54   1.0166937 AU   -2485 km     365.53 days
        2005     Jan 02  00:35   0.9832968 AU    1032 km      Jul 05  04:58   1.0167416 AU    4683 km     363.29 days
        2006     Jan 04  15:30   0.9833270 AU    5543 km      Jul 03  23:10   1.0166973 AU   -1949 km     367.62 days
        2007     Jan 03  19:43   0.9832602 AU   -4449 km      Jul 06  23:53   1.0167059 AU    -649 km     364.18 days
        2008     Jan 02  23:51   0.9832801 AU   -1476 km      Jul 04  07:41   1.0167535 AU    6465 km     364.17 days
        2009     Jan 04  15:30   0.9832730 AU   -2526 km      Jul 04  01:40   1.0166664 AU   -6563 km     367.65 days
        2010     Jan 03  00:09   0.9832897 AU     -38 km      Jul 06  11:30   1.0167020 AU   -1246 km     363.36 days


## The view: aConsole package

This is the user interface layer which is responsible for displaying data to the user and raising user events to the presenter layer.

File: OutputConsole.java

```java
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
```

## Application structure

        ┠─ samples ┒
                   ┠─ readDatasFromFile ┒
                                        ┠─ aConsole ── OutputConsole.java
                                        ┃
                                        ┠─ aControl ── Presenter.java
                                        ┃
                                        ┖─ aData    ┒ 
                                                    ┠─ ReadFromFile.java
                                                    ┃
                                                    ┖─ datas.txt
```

## Commandline step by step:

Use the terminal on your computer. And make a root dir for your simple samples.

        mkdir samples
        cd samples

Make a dir for the first sample „readDatasFromFile”
        mkdir readDatasFromFile
        cd readDatasFromFile

Make a dirs for the structure of the project
        mkdir aControl
        mkdir aData
        mkdir aConsole

With your favorite text editor add the files into his directories:  

- OutputConsole.java into aConsole,
- Presenter.java into aControl.
- ReadFromFile.java into aData,
- datas.txt into aData,

## Compile and run the project:

The JDK must be installed. The path to javac.exe in the environment variables must be set correctly.

### Linux terminal commandline:

        $ cp -r src bin
        $ rm -v bin/*/*.javajavac 

        $ javac -d bin -sourcepath src src/aControl/Presenter.java
        $ echo "Main-Class: aControl.Presenter" > bin/manifest
        
        $ cd bin
        $ jar cfmv readDatasFromFile.jar manifest *

        $ java -jar ReadDatasFromFile.jar
        > datas.txt has 11 lines.

### Windows 7 commandline:

(„root>” like „C:\Users\samplaes>” - the directory of java src)

        root>xcopy /E /I src bin
        root>del /S bin\*.java

        root>javac -d bin -sourcepath src src\aControl\Presenter.java
        root>echo Main-Class: aControl.Presenter > bin\manifest

        root>cd bin
        root>jar cfmv readDatasFromFile.jar manifest *

        root>java -jar ReadDatasFromFile.jar
        > datas.txt has 11 lines.

[w3schools](https://www.w3schools.com/charsets/ref_utf_box.asp)


