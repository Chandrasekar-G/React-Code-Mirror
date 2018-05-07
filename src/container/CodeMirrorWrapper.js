import React from 'react';
import { UnControlled as CodeMirror } from "react-codemirror2";
import './CodeMirrorWrapper.css';

require('codemirror/mode/apl/apl');
require('codemirror/mode/asciiarmor/asciiarmor');
require('codemirror/mode/asn.1/asn.1');
require('codemirror/mode/asterisk/asterisk');
require('codemirror/mode/brainfuck/brainfuck');
require('codemirror/mode/clike/clike');
require('codemirror/mode/clike/clike');
require('codemirror/mode/cobol/cobol');
require('codemirror/mode/clike/clike');
require('codemirror/mode/clojure/clojure');
require('codemirror/mode/clojure/clojure');
require('codemirror/mode/css/css');
require('codemirror/mode/cmake/cmake');
require('codemirror/mode/coffeescript/coffeescript');
require('codemirror/mode/commonlisp/commonlisp');
require('codemirror/mode/cypher/cypher');
require('codemirror/mode/python/python');
require('codemirror/mode/crystal/crystal');
require('codemirror/mode/css/css');
require('codemirror/mode/sql/sql');
require('codemirror/mode/d/d');
require('codemirror/mode/dart/dart');
require('codemirror/mode/diff/diff');
require('codemirror/mode/django/django');
require('codemirror/mode/dockerfile/dockerfile');
require('codemirror/mode/dtd/dtd');
require('codemirror/mode/dylan/dylan');
require('codemirror/mode/ebnf/ebnf');
require('codemirror/mode/ecl/ecl');
require('codemirror/mode/clojure/clojure');
require('codemirror/mode/eiffel/eiffel');
require('codemirror/mode/elm/elm');
require('codemirror/mode/htmlembedded/htmlembedded');
require('codemirror/mode/htmlembedded/htmlembedded');
require('codemirror/mode/erlang/erlang');
require('codemirror/mode/sql/sql');
require('codemirror/mode/factor/factor');
require('codemirror/mode/fcl/fcl');
require('codemirror/mode/forth/forth');
require('codemirror/mode/fortran/fortran');
require('codemirror/mode/mllike/mllike');
require('codemirror/mode/gas/gas');
require('codemirror/mode/gherkin/gherkin');
require('codemirror/mode/gfm/gfm');
require('codemirror/mode/go/go');
require('codemirror/mode/groovy/groovy');
require('codemirror/mode/haml/haml');
require('codemirror/mode/haskell/haskell');
require('codemirror/mode/haskell-literate/haskell-literate');
require('codemirror/mode/haxe/haxe');
require('codemirror/mode/haxe/haxe');
require('codemirror/mode/htmlembedded/htmlembedded');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/http/http');
require('codemirror/mode/idl/idl');
require('codemirror/mode/pug/pug');
require('codemirror/mode/clike/clike');
require('codemirror/mode/htmlembedded/htmlembedded');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/jinja2/jinja2');
require('codemirror/mode/julia/julia');
require('codemirror/mode/clike/clike');
require('codemirror/mode/css/css');
require('codemirror/mode/livescript/livescript');
require('codemirror/mode/lua/lua');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/mirc/mirc');
require('codemirror/mode/sql/sql');
require('codemirror/mode/mathematica/mathematica');
require('codemirror/mode/modelica/modelica');
require('codemirror/mode/mumps/mumps');
require('codemirror/mode/sql/sql');
require('codemirror/mode/mbox/mbox');
require('codemirror/mode/sql/sql');
require('codemirror/mode/nginx/nginx');
require('codemirror/mode/nsis/nsis');
require('codemirror/mode/ntriples/ntriples');
require('codemirror/mode/clike/clike');
require('codemirror/mode/mllike/mllike');
require('codemirror/mode/octave/octave');
require('codemirror/mode/oz/oz');
require('codemirror/mode/pascal/pascal');
require('codemirror/mode/pegjs/pegjs');
require('codemirror/mode/perl/perl');
require('codemirror/mode/php/php');
require('codemirror/mode/pig/pig');
require('codemirror/mode/sql/sql');
require('codemirror/mode/powershell/powershell');
require('codemirror/mode/properties/properties');
require('codemirror/mode/protobuf/protobuf');
require('codemirror/mode/python/python');
require('codemirror/mode/puppet/puppet');
require('codemirror/mode/q/q');
require('codemirror/mode/r/r');
require('codemirror/mode/rst/rst');
require('codemirror/mode/rpm/rpm');
require('codemirror/mode/rpm/rpm');
require('codemirror/mode/ruby/ruby');
require('codemirror/mode/rust/rust');
require('codemirror/mode/sas/sas');
require('codemirror/mode/sass/sass');
require('codemirror/mode/clike/clike');
require('codemirror/mode/scheme/scheme');
require('codemirror/mode/css/css');
require('codemirror/mode/shell/shell');
require('codemirror/mode/sieve/sieve');
require('codemirror/mode/slim/slim');
require('codemirror/mode/smalltalk/smalltalk');
require('codemirror/mode/smarty/smarty');
require('codemirror/mode/solr/solr');
require('codemirror/mode/mllike/mllike');
require('codemirror/mode/soy/soy');
require('codemirror/mode/sparql/sparql');
require('codemirror/mode/spreadsheet/spreadsheet');
require('codemirror/mode/sql/sql');
require('codemirror/mode/sql/sql');
require('codemirror/mode/clike/clike');
require('codemirror/mode/stylus/stylus');
require('codemirror/mode/swift/swift');
require('codemirror/mode/stex/stex');
require('codemirror/mode/stex/stex');
require('codemirror/mode/verilog/verilog');
require('codemirror/mode/tcl/tcl');
require('codemirror/mode/textile/textile');
require('codemirror/mode/tiddlywiki/tiddlywiki');
require('codemirror/mode/tiki/tiki');
require('codemirror/mode/toml/toml');
require('codemirror/mode/tornado/tornado');
require('codemirror/mode/troff/troff');
require('codemirror/mode/ttcn/ttcn');
require('codemirror/mode/ttcn-cfg/ttcn-cfg');
require('codemirror/mode/turtle/turtle');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/twig/twig');
require('codemirror/mode/webidl/webidl');
require('codemirror/mode/vb/vb');
require('codemirror/mode/vbscript/vbscript');
require('codemirror/mode/velocity/velocity');
require('codemirror/mode/verilog/verilog');
require('codemirror/mode/vhdl/vhdl');
require('codemirror/mode/vue/vue');
require('codemirror/mode/xml/xml');
require('codemirror/mode/xquery/xquery');
require('codemirror/mode/yacas/yacas');
require('codemirror/mode/yaml/yaml');
require('codemirror/mode/z80/z80');
require('codemirror/mode/mscgen/mscgen');
require('codemirror/mode/mscgen/mscgen');
require('codemirror/mode/mscgen/mscgen');


class CodeMirrorWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myVal: "a",
            theme: "material",
            mode: "xml",
            allThemes: ["material", "3024-day", "3024-night", "abcdef", "ambiance", "base16-dark", "base16-light", "bespin", "blackboard", "cobalt", "colorforth", "dracula", "duotone-dark", "duotone-light", "eclipse", "elegant", "erlang-dark", "gruvbox-dark", "hopscotch", "icecoder", "idea", "isotope", "lesser-dark", "liquibyte", "lucario", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "oceanic-next", "panda-syntax", "paraiso-dark", "paraiso-light", "pastel-on-dark", "railscasts", "rubyblue", "seti", "shadowfox", "solarized", "the-matrix", "tomorrow-night-bright", "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "zenburn"],
            allModes: ["apl", "asciiarmor", "asn.1", "asterisk", "brainfuck", "clike", "clike", "cobol", "clike", "clojure", "clojure", "css", "cmake", "coffeescript", "commonlisp", "cypher", "python", "crystal", "css", "sql", "d", "dart", "diff", "django", "dockerfile", "dtd", "dylan", "ebnf", "ecl", "clojure", "eiffel", "elm", "htmlembedded", "htmlembedded", "erlang", "sql", "factor", "fcl", "forth", "fortran", "mllike", "gas", "gherkin", "gfm", "go", "groovy", "haml", "haskell", "haskell-literate", "haxe", "haxe", "htmlembedded", "htmlmixed", "http", "idl", "pug", "clike", "htmlembedded", "javascript", "javascript", "javascript", "jsx", "jinja2", "julia", "clike", "css", "livescript", "lua", "markdown", "mirc", "sql", "mathematica", "modelica", "mumps", "sql", "mbox", "sql", "nginx", "nsis", "ntriples", "clike", "mllike", "octave", "oz", "pascal", "pegjs", "perl", "php", "pig", "null", "sql", "powershell", "properties", "protobuf", "python", "puppet", "q", "r", "rst", "rpm", "rpm", "ruby", "rust", "sas", "sass", "clike", "scheme", "css", "shell", "sieve", "slim", "smalltalk", "smarty", "solr", "mllike", "soy", "sparql", "spreadsheet", "sql", "sql", "clike", "stylus", "swift", "stex", "stex", "verilog", "tcl", "textile", "tiddlywiki", "tiki", "toml", "tornado", "troff", "ttcn", "ttcn-cfg", "turtle", "javascript", "jsx", "twig", "webidl", "vb", "vbscript", "velocity", "verilog", "vhdl", "vue", "xml", "xquery", "yacas", "yaml", "z80", "mscgen", "mscgen", "mscgen"]
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