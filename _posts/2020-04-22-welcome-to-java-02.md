---
layout: post
author: kovax
category: programming
title: welcome to java MVP - 02 data preparation
meta: mvp java data preparation
shortcontent: mvp java data preparation
tag: [java, computing]
image: javaProgLang.jpg
subtitle: simple sample in Netbeans IDE
sitemap:
    lastmod: 2020-04-22
    priority: 0.75
    changefreq: '1 month'
    exclude: 'no'
---
## Java String

The Java Regex or Regular Expression is an API to define a pattern for searching or manipulating strings.
It is widely used to define the constraint on strings such as password and email validation.

## The presenter: aControl package

File: Presenter.java

>        package aControl;

        import aBasis.DataRecord;
        import aBasis.TableHead;

>        import aConsole.OutputConsole;
        import aData.ReadFromFile;
        import java.util.ArrayList;
        import java.util.List;
>
>        public class Presenter {
>
>           private static final String DATA_FILE = "/aData/datas.txt";
            private static final ReadFromFile READ = new ReadFromFile();
            private static final OutputConsole OUT = new OutputConsole();
            private static List<String> datalines;

             private static TableHead thead;
             private static DataRecord drecord;

>            /**
             * @param args the command line arguments
             */
            public static void main(String[] args) {
                datalines = new ArrayList<>();
                datalines = READ.dataLines(Presenter.DATA_FILE);
                OUT.writeln("> datas.txt has " + datalines.size() + " lines.");

              thead = new TableHead(datalines.get(0));
                OUT.writeln(thead.toString());
                for (int i = 1; i < datalines.size(); i++) {
                    drecord = new DataRecord(i, datalines.get(i));
                    OUT.writeln(drecord.toString());
                }

>            }
        }


## The model: aBasis package

File: TableHead.java

        package aBasis;

        import java.util.ArrayList;
        import java.util.Arrays;
        import java.util.List;

        public class TableHead {

            private static String DELIMITER = "  ";

            public static String getDELIMITER() {
                return DELIMITER;
            }

            public static void setDELIMITER(String delimiter) {
                TableHead.DELIMITER = delimiter;
            }

            private final String[] THEAD;
            private final int COLUMNR;

            public String[] getTHEAD() {
                return THEAD;
            }

            public int getCOLUNNR() {
                return COLUMNR;
            }

            public TableHead(String line) {
                String[] splitter = line.split(RGX);
                List<String> buffer = new ArrayList<>();
                for (String s : splitter) {
                    if (!s.trim().equals("")) {
                        buffer.add(s);
                    }
                }
                this.COLUMNR = buffer.size();
                this.THEAD = buffer.toArray(new String[COLUMNR]);
            }

            @Override
            public String toString() {
                return Arrays.toString(THEAD);
            }
        }

File: DataRecord.java

        package aBasis;

        import java.util.ArrayList;
        import java.util.Arrays;
        import java.util.List;

        public class DataRecord {

            private static String DELIMITER = "  ";

            public static String getDELIMITER() {
                return DELIMITER;
            }

            public static void setDELIMITER(String delimiter) {
                TableHead.DELIMITER = delimiter;
            }

            private int COLUMNR;
            private final String[] RECORD;
            boolean valid = true;

            public int getCOLUMNR() {
                return COLUMNR;
            }

            public String[] getRECORD() {
                return RECORD;
            }

            public boolean isValid() {
                return valid;
            }

            public DataRecord(int n, String line) {
                String[] splitter = line.split(RGX);
                List<String> buffer = new ArrayList<>();
                for (String s : splitter) {
                    if (!s.trim().equals("")) {
                        buffer.add(s);
                    }
                }
                this.COLUMNR = buffer.size();
                this.valid = this.COLUMNR == n;
                this.RECORD = buffer.toArray(new String[this.COLUMNR]);
            }

            @Override
            public String toString() {
                return Arrays.toString(RECORD);
            }
        }


## Application structure

        ┠─ samples ┒
                   ┠─ readDatasFromFile ┒
                                        ┠─ aBasis   ┒
                                        ┃           ┠─ DataRecord.java
                                        ┃           ┃
                                        ┃           ┖─ TableHead.java
                                        ┃
                                        ┠─ aConsole ── OutputConsole.java
                                        ┃
                                        ┠─ aControl ── Presenter.java
                                        ┃
                                        ┖─ aData    ┒ 
                                                    ┠─ ReadFromFile.java
                                                    ┃
                                                    ┖─ datas.txt


## Commandline step by step:

Change to the dir of „readDatasFromFile”
        cd readDatasFromFile

Make a dir for the new package of the project
        mkdir aBasis

With your favorite text editor add the files into his directory:  

- TableHead.java into aBasis,
- DataRecord.java into aBasis.

... and apply the changes in Presenter.java.

## Compile and run the project:

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

