var searchIndex = {};
searchIndex["assert_cli"] = {"doc":"# Test CLI Applications","items":[[5,"assert_cli","assert_cli","Assert a CLI call",null,null],[5,"assert_cli_output","","Assert a CLI call returns the expected output.",null,null],[5,"assert_cli_error","","Assert a CLI call that fails with a given error code.",null,null],[5,"assert_cli_output_error","","Assert a CLI call that fails the expected `stderr` output and error code.",null,null],[14,"assert_cli!","","The `assert_cli!` macro combines the functionality of the other functions in this crate in one\nshort macro.",null,null]],"paths":[]};
searchIndex["difference"] = {"doc":"Functions to find the difference between to texts (strings).\nUsage\n----------","items":[[4,"Difference","difference","Defines the contents of a changeset\nChangesets will be delivered in order of appearance in the original string\nSequences of the same kind will be grouped into one Difference",null,null],[13,"Same","","Sequences that are the same",0,null],[13,"Add","","Sequences that are an addition (don&#39;t appear in the first string)",0,null],[13,"Rem","","Sequences that are a removal (don&#39;t appear in the second string)",0,null],[5,"diff","","Calculates the edit distance and the changeset for two given strings.\nThe first string is assumed to be the &quot;original&quot;, the second to be an\nedited version of the first. The third parameter specifies how to split\nthe input strings, leading to a more or less exact comparison.",null,null],[5,"assert_diff","","Assert the difference between two strings. Works like diff, but takes\na fourth parameter that is the expected edit distance (e.g. 0 if you want to\ntest for equality).",null,{"inputs":[{"name":"str"},{"name":"str"},{"name":"str"},{"name":"i32"}],"output":null}],[5,"print_diff","","Prints a colorful visual representation of the diff.\nThis is just a convenience function for those who want quick results.",null,{"inputs":[{"name":"str"},{"name":"str"},{"name":"str"}],"output":null}],[11,"fmt","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null]],"paths":[[4,"Difference"]]};
searchIndex["getopts"] = {"doc":"Simple getopt alternative.","items":[[3,"Options","getopts","A description of the options that a program can handle.",null,null],[3,"Matches","","The result of checking command line arguments. Contains a vector\nof matches and a vector of free strings.",null,null],[12,"free","","Free string fragments",0,null],[4,"ParsingStyle","","What parsing style to use when parsing arguments.",null,null],[13,"FloatingFrees","","Flags and &quot;free&quot; arguments can be freely inter-mixed.",1,null],[13,"StopAtFirstFree","","As soon as a &quot;free&quot; argument (i.e. non-flag) is encountered, stop\nconsidering any remaining arguments as flags.",1,null],[4,"HasArg","","Describes whether an option has an argument.",null,null],[13,"Yes","","The option requires an argument.",2,null],[13,"No","","The option takes no argument.",2,null],[13,"Maybe","","The option argument is optional.",2,null],[4,"Occur","","Describes how often an option may occur.",null,null],[13,"Req","","The option occurs once.",3,null],[13,"Optional","","The option occurs at most once.",3,null],[13,"Multi","","The option occurs zero or more times.",3,null],[4,"Fail","","The type returned when the command line does not conform to the\nexpected format. Use the `Debug` implementation to output detailed\ninformation.",null,null],[13,"ArgumentMissing","","The option requires an argument but none was passed.",4,null],[13,"UnrecognizedOption","","The passed option is not declared among the possible options.",4,null],[13,"OptionMissing","","A required option is not present.",4,null],[13,"OptionDuplicated","","A single occurrence option is being used multiple times.",4,null],[13,"UnexpectedArgument","","There&#39;s an argument being passed to a non-argument option.",4,null],[4,"FailType","","The type of failure that occurred.",null,null],[13,"ArgumentMissing_","","",5,null],[13,"UnrecognizedOption_","","",5,null],[13,"OptionMissing_","","",5,null],[13,"OptionDuplicated_","","",5,null],[13,"UnexpectedArgument_","","",5,null],[6,"Result","","The result of parsing a command line with a set of options.",null,null],[11,"new","","Create a blank set of options.",6,{"inputs":[],"output":{"name":"options"}}],[11,"parsing_style","","Set the parsing style.",6,null],[11,"opt","","Create a generic option group, stating all parameters explicitly.",6,null],[11,"optflag","","Create a long option that is optional and does not take an argument.",6,null],[11,"optflagmulti","","Create a long option that can occur more than once and does not\ntake an argument.",6,null],[11,"optflagopt","","Create a long option that is optional and takes an optional argument.",6,null],[11,"optmulti","","Create a long option that is optional, takes an argument, and may occur\nmultiple times.",6,null],[11,"optopt","","Create a long option that is optional and takes an argument.",6,null],[11,"reqopt","","Create a long option that is required and takes an argument.",6,null],[11,"parse","","Parse command line arguments according to the provided options.",6,null],[11,"short_usage","","Derive a short one-line usage summary from a set of long options.",6,null],[11,"usage","","Derive a usage message from a set of options.",6,null],[11,"eq","","",1,null],[11,"clone","","",1,null],[11,"eq","","",2,null],[11,"clone","","",2,null],[11,"eq","","",3,null],[11,"clone","","",3,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"clone","","",0,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"fmt","","",4,null],[11,"clone","","",4,null],[11,"description","","",4,null],[11,"eq","","",5,null],[11,"clone","","",5,null],[11,"opt_present","","Returns true if an option was matched.",0,null],[11,"opt_count","","Returns the number of times an option was matched.",0,null],[11,"opts_present","","Returns true if any of several options were matched.",0,null],[11,"opts_str","","Returns the string argument supplied to one of several matching options or `None`.",0,null],[11,"opt_strs","","Returns a vector of the arguments provided to all matches of the given\noption.",0,null],[11,"opt_str","","Returns the string argument supplied to a matching option or `None`.",0,null],[11,"opt_default","","Returns the matching string, a default, or `None`.",0,null],[11,"fmt","","",4,null]],"paths":[[3,"Matches"],[4,"ParsingStyle"],[4,"HasArg"],[4,"Occur"],[4,"Fail"],[4,"FailType"],[3,"Options"]]};
searchIndex["ansi_term"] = {"doc":"This is a library for controlling colours and formatting, such as\nred bold text or blue underlined text, on ANSI terminals.","items":[[3,"ANSIString","ansi_term","An ANSI String is a string coupled with the Style to display it\nin a terminal.",null,null],[3,"Style","","A style is a collection of properties that can format a string\nusing ANSI escape codes.",null,null],[3,"ANSIStrings","","A set of `ANSIString`s collected together, in order to be written with a\nminimum of control characters.",null,null],[12,"0","","",0,null],[4,"Colour","","A colour is one specific type of ANSI escape code, and can refer\nto either the foreground or background colour.",null,null],[13,"Black","","",1,null],[13,"Red","","",1,null],[13,"Green","","",1,null],[13,"Yellow","","",1,null],[13,"Blue","","",1,null],[13,"Purple","","",1,null],[13,"Cyan","","",1,null],[13,"White","","",1,null],[13,"Fixed","","",1,null],[11,"clone","","",2,null],[11,"new","","Creates a new ANSI String with the given contents and style.",2,{"inputs":[{"name":"str"},{"name":"style"}],"output":{"name":"ansistring"}}],[11,"fmt","","",2,null],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"normal","","Return a Style with the foreground colour set to this colour.",1,null],[11,"paint","","Paints the given text with this colour, returning an ANSI string.\nThis is a short-cut so you don&#39;t have to use Blue.normal() just\nto get blue text.",1,null],[11,"bold","","Returns a Style with the bold property set.",1,null],[11,"dimmed","","Returns a Style with the dimmed property set.",1,null],[11,"italic","","Returns a Style with the italic property set.",1,null],[11,"underline","","Returns a Style with the underline property set.",1,null],[11,"blink","","Returns a Style with the blink property set.",1,null],[11,"reverse","","Returns a Style with the reverse property set.",1,null],[11,"hidden","","Returns a Style with the hidden property set.",1,null],[11,"on","","Returns a Style with the background colour property set.",1,null],[11,"fmt","","",3,null],[11,"clone","","",3,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"new","","Creates a new Style with no differences.",3,{"inputs":[],"output":{"name":"style"}}],[11,"paint","","Paints the given text with this colour, returning an ANSI string.",3,null],[11,"bold","","Returns a Style with the bold property set.",3,null],[11,"dimmed","","Returns a Style with the dimmed property set.",3,null],[11,"italic","","Returns a Style with the italic property set.",3,null],[11,"underline","","Returns a Style with the underline property set.",3,null],[11,"blink","","Returns a Style with the blink property set.",3,null],[11,"reverse","","Returns a Style with the reverse property set.",3,null],[11,"hidden","","Returns a Style with the hidden property set.",3,null],[11,"on","","Returns a Style with the background colour property set.",3,null],[11,"default","","",3,{"inputs":[],"output":{"name":"style"}}],[11,"fmt","","",0,null]],"paths":[[3,"ANSIStrings"],[4,"Colour"],[3,"ANSIString"],[3,"Style"]]};
initSearch(searchIndex);
