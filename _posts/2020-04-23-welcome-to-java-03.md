---
layout: post
author: kovax
category: programming
title: welcome to java MVP - 03 data table
meta: mvp java data table
shortcontent: mvp java data preparation
tag: [java, computing]
image: wizz-of-db.jpg
subtitle: the wizard of dbase
sitemap:
    lastmod: 2020-04-23
    priority: 0.75
    changefreq: '1 month'
    exclude: 'no'
---
## Java array

### Array and List


## The presenter: aControl package

File: Presenter.java

>```
        package aControl;
```

```java
        import aBasis.DataRecord;
        import aBasis.TableHead;
```
  
>```
        import aConsole.OutputConsole;
        import aData.ReadFromFile;
        import java.util.ArrayList;
        import java.util.List;
>
        public class Presenter {
>
            private static final String DATA_FILE = "/aData/datas.txt";
            private static final ReadFromFile READ = new ReadFromFile();
            private static final OutputConsole OUT = new OutputConsole();
            private static List<String> datalines;
```

```java
             private static TableHead thead;
             private static DataRecord drecord;
```

>```
             /**
             * @param args the command line arguments
             */
             public static void main(String[] args) {
                datalines = new ArrayList<>();
                datalines = READ.dataLines(Presenter.DATA_FILE);
                OUT.writeln("> datas.txt has " + datalines.size() + " lines.");
```

```java
              thead = new TableHead(datalines.get(0));
                OUT.writeln(thead.toString());
                for (int i = 1; i < datalines.size(); i++) {
                    drecord = new DataRecord(i, datalines.get(i));
                    OUT.writeln(drecord.toString());
                }
```

>```
            }
        }
```

## The model: aBasis package

File: TableData.java

```java

```


## Application structure

        ┠─ samples ┒
                   ┠─ readDatasFromFile ┒
                                        ┠─ aBasis   ┒
                                        ┃           ┠─ DataRecord.java
                                        ┃           ┃
                                        ┃           ┠─ TableData.java
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

With your favorite text editor add the files into his directory:  

- TableData.java into aBasis,

... and apply the changes in Presenter.java.

## Compile and run the project:

### Linux terminal commandline:

        $ cp -r src bin
        $ rm -v bin/*/*.java

        $ javac -d bin -sourcepath src src/aControl/Presenter.java
        $ echo "Main-Class: aControl.Presenter" > bin/manifest
        
        $ cd bin
        $ jar cfmv readDatasFromFile.jar manifest *

        $ java -jar readDatasFromFile.jar
        > datas.txt has 11 lines.
        [Year, Date/Time of Perihelion,  Distance,  Relative to Mean Per., Date/Time of Aphelion,  Distance,  Relative to Mean Ap., Perihelion Interval]
        [2001,  Jan 04, 08:52,  0.9832860 AU, -582 km, Jul 04, 13:37,  1.0166426 AU, -10122 km,  367.15 days]
        [2002,  Jan 02, 14:09,  0.9832898 AU,  -20 km, Jul 06, 03:47,  1.0166882 AU,  -3304 km,  363.22 days]
        [2003,  Jan 04, 05:02,  0.9833204 AU, 4556 km, Jul 04, 05:40,  1.0167282 AU, 2683 km,  366.62 days]
        [2004,  Jan 04, 17:42,  0.9832648 AU,  -3752 km, Jul 05, 10:54,  1.0166937 AU,  -2485 km,  365.53 days]
        [2005,  Jan 02, 00:35,  0.9832968 AU, 1032 km, Jul 05, 04:58,  1.0167416 AU, 4683 km,  363.29 days]
        [2006,  Jan 04, 15:30,  0.9833270 AU, 5543 km, Jul 03, 23:10,  1.0166973 AU,  -1949 km,  367.62 days]
        [2007,  Jan 03, 19:43,  0.9832602 AU,  -4449 km, Jul 06, 23:53,  1.0167059 AU, -649 km,  364.18 days]
        [2008,  Jan 02, 23:51,  0.9832801 AU,  -1476 km, Jul 04, 07:41,  1.0167535 AU, 6465 km,  364.17 days]
        [2009,  Jan 04, 15:30,  0.9832730 AU,  -2526 km, Jul 04, 01:40,  1.0166664 AU,  -6563 km,  367.65 days]
        [2010,  Jan 03, 00:09,  0.9832897 AU,  -38 km, Jul 06, 11:30,  1.0167020 AU,  -1246 km,  363.36 days]


### Windows 7 commandline:

(„root>” like „C:\Users\samplaes>” - the directory of java src)

        root>xcopy /E /I src bin
        root>del /S bin\*.java

        root>javac -d bin -sourcepath src src\aControl\Presenter.java
        root>echo Main-Class: aControl.Presenter > bin\manifest

        root>cd bin
        root>jar cfmv readDatasFromFile.jar manifest *

        root>java -jar readDatasFromFile.jar
        > datas.txt has 11 lines.
        [Year, Date/Time of Perihelion,  Distance,  Relative to Mean Per., Date/Time of Aphelion,  Distance,  Relative to Mean Ap., Perihelion Interval]
        [2001,  Jan 04, 08:52,  0.9832860 AU, -582 km, Jul 04, 13:37,  1.0166426 AU, -10122 km,  367.15 days]
        [2002,  Jan 02, 14:09,  0.9832898 AU,  -20 km, Jul 06, 03:47,  1.0166882 AU,  -3304 km,  363.22 days]
        [2003,  Jan 04, 05:02,  0.9833204 AU, 4556 km, Jul 04, 05:40,  1.0167282 AU, 2683 km,  366.62 days]
        [2004,  Jan 04, 17:42,  0.9832648 AU,  -3752 km, Jul 05, 10:54,  1.0166937 AU,  -2485 km,  365.53 days]
        [2005,  Jan 02, 00:35,  0.9832968 AU, 1032 km, Jul 05, 04:58,  1.0167416 AU, 4683 km,  363.29 days]
        [2006,  Jan 04, 15:30,  0.9833270 AU, 5543 km, Jul 03, 23:10,  1.0166973 AU,  -1949 km,  367.62 days]
        [2007,  Jan 03, 19:43,  0.9832602 AU,  -4449 km, Jul 06, 23:53,  1.0167059 AU, -649 km,  364.18 days]
        [2008,  Jan 02, 23:51,  0.9832801 AU,  -1476 km, Jul 04, 07:41,  1.0167535 AU, 6465 km,  364.17 days]
        [2009,  Jan 04, 15:30,  0.9832730 AU,  -2526 km, Jul 04, 01:40,  1.0166664 AU,  -6563 km,  367.65 days]
        [2010,  Jan 03, 00:09,  0.9832897 AU,  -38 km, Jul 06, 11:30,  1.0167020 AU,  -1246 km,  363.36 days]


