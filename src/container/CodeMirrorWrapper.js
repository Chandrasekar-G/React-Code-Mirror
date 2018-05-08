import React from 'react';
import { UnControlled as CodeMirror } from "react-codemirror2";
import './CodeMirrorWrapper.css';
require('./CodeMirrorModes');

class CodeMirrorWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myVal: "<h1>React</h1>",
            theme: "material",
            mode: "xml",
            allThemes: ["material", "3024-day", "3024-night", "abcdef", "ambiance", "base16-dark", "base16-light", "bespin", "blackboard", "cobalt", "colorforth", "dracula", "duotone-dark", "duotone-light", "eclipse", "elegant", "erlang-dark", "gruvbox-dark", "hopscotch", "icecoder", "idea", "isotope", "lesser-dark", "liquibyte", "lucario", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "oceanic-next", "panda-syntax", "paraiso-dark", "paraiso-light", "pastel-on-dark", "railscasts", "rubyblue", "seti", "shadowfox", "solarized", "the-matrix", "tomorrow-night-bright", "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "zenburn"],
            allModes: ["apl", "asciiarmor", "asn.1", "asterisk", "brainfuck", "clike", "clike", "cobol", "clike", "clojure", "clojure", "css", "cmake", "coffeescript", "commonlisp", "cypher", "python", "crystal", "css", "sql", "d", "dart", "diff", "django", "dockerfile", "dtd", "dylan", "ebnf", "ecl", "clojure", "eiffel", "elm", "htmlembedded", "htmlembedded", "erlang", "sql", "factor", "fcl", "forth", "fortran", "mllike", "gas", "gherkin", "gfm", "go", "groovy", "haml", "haskell", "haskell-literate", "haxe", "haxe", "htmlembedded", "htmlmixed", "http", "idl", "pug", "clike", "htmlembedded", "javascript", "jsx", "jinja2", "julia", "clike", "css", "livescript", "lua", "markdown", "mirc", "sql", "mathematica", "modelica", "mumps", "sql", "mbox", "sql", "nginx", "nsis", "ntriples", "clike", "mllike", "octave", "oz", "pascal", "pegjs", "perl", "php", "pig", "null", "sql", "powershell", "properties", "protobuf", "python", "puppet", "q", "r", "rst", "rpm", "rpm", "ruby", "rust", "sas", "sass", "clike", "scheme", "css", "shell", "sieve", "slim", "smalltalk", "smarty", "solr", "mllike", "soy", "sparql", "spreadsheet", "sql", "sql", "clike", "stylus", "swift", "stex", "stex", "verilog", "tcl", "textile", "tiddlywiki", "tiki", "toml", "tornado", "troff", "ttcn", "ttcn-cfg", "turtle", "javascript", "jsx", "twig", "webidl", "vb", "vbscript", "velocity", "verilog", "vhdl", "vue", "xml", "xquery", "yacas", "yaml", "z80", "mscgen", "mscgen", "mscgen"]
        };
    }

    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <label>Theme : </label>
                    <select onChange={event => this.setState({ theme: event.target.value })} value={this.state.theme}>
                        {this.state.allThemes.map(function (theme, index) {
                            return <option key={index} value={theme}>{theme}</option>
                        })
                        }
                    </select>
                    <label>Language : </label>
                    <select onChange={event => this.setState({ mode: event.target.value })} value={this.state.mode}>
                        {this.state.allModes.map(function (mode, index) {
                            return <option key={index} value={mode}>{mode}</option>
                        })
                        }
                    </select>
                </div>
                <div className="code-container">
                    <CodeMirror
                        className="code-mirror"
                        value='<h1>React</h1>'
                        options={{
                            mode: this.state.mode,
                            theme: this.state.theme,
                            lineNumbers: true,
                        }}
                        onChange={(editor, data, value) => {
                            this.setState({ myVal: value });
                        }}
                    />
                    <CodeMirror
                        className="code-mirror"
                        value={this.state.myVal}
                        options={{
                            mode: this.state.mode,
                            theme: this.state.theme,
                            lineNumbers: true,
                            readOnly: true
                        }}
                        onChange={(editor, data, value) => {
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default CodeMirrorWrapper;