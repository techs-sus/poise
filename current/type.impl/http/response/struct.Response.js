(function() {var type_impls = {
"tungstenite":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Response%3C()%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/http/response.rs.html#213\">source</a><a href=\"#impl-Response%3C()%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.builder\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#230\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.builder\" class=\"fn\">builder</a>() -&gt; <a class=\"struct\" href=\"http/response/struct.Builder.html\" title=\"struct http::response::Builder\">Builder</a></h4></section></summary><div class=\"docblock\"><p>Creates a new builder-style object to manufacture a <code>Response</code></p>\n<p>This method returns an instance of <code>Builder</code> which can be used to\ncreate a <code>Response</code>.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response = Response::builder()\n    .status(<span class=\"number\">200</span>)\n    .header(<span class=\"string\">&quot;X-Custom-Foo&quot;</span>, <span class=\"string\">&quot;Bar&quot;</span>)\n    .body(())\n    .unwrap();</code></pre></div>\n</div></details></div></details>",0,"tungstenite::handshake::server::Response"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Response%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/http/response.rs.html#235\">source</a><a href=\"#impl-Response%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#251\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.new\" class=\"fn\">new</a>(body: T) -&gt; <a class=\"struct\" href=\"http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new blank <code>Response</code> with the body</p>\n<p>The component ports of this response will be set to their default, e.g.\nthe ok status, no headers, etc.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response = Response::new(<span class=\"string\">&quot;hello world&quot;</span>);\n\n<span class=\"macro\">assert_eq!</span>(response.status(), StatusCode::OK);\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>response.body(), <span class=\"string\">&quot;hello world&quot;</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#274\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.from_parts\" class=\"fn\">from_parts</a>(parts: <a class=\"struct\" href=\"http/response/struct.Parts.html\" title=\"struct http::response::Parts\">Parts</a>, body: T) -&gt; <a class=\"struct\" href=\"http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>Response</code> with the given head and body</p>\n<h5 id=\"examples-1\"><a href=\"#examples-1\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response = Response::new(<span class=\"string\">&quot;hello world&quot;</span>);\n<span class=\"kw\">let </span>(<span class=\"kw-2\">mut </span>parts, body) = response.into_parts();\n\nparts.status = StatusCode::BAD_REQUEST;\n<span class=\"kw\">let </span>response = Response::from_parts(parts, body);\n\n<span class=\"macro\">assert_eq!</span>(response.status(), StatusCode::BAD_REQUEST);\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>response.body(), <span class=\"string\">&quot;hello world&quot;</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.status\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#291\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.status\" class=\"fn\">status</a>(&amp;self) -&gt; <a class=\"struct\" href=\"http/status/struct.StatusCode.html\" title=\"struct http::status::StatusCode\">StatusCode</a></h4></section></summary><div class=\"docblock\"><p>Returns the <code>StatusCode</code>.</p>\n<h5 id=\"examples-2\"><a href=\"#examples-2\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response: Response&lt;()&gt; = Response::default();\n<span class=\"macro\">assert_eq!</span>(response.status(), StatusCode::OK);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.status_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#306\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.status_mut\" class=\"fn\">status_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"http/status/struct.StatusCode.html\" title=\"struct http::status::StatusCode\">StatusCode</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated <code>StatusCode</code>.</p>\n<h5 id=\"examples-3\"><a href=\"#examples-3\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>response: Response&lt;()&gt; = Response::default();\n<span class=\"kw-2\">*</span>response.status_mut() = StatusCode::CREATED;\n<span class=\"macro\">assert_eq!</span>(response.status(), StatusCode::CREATED);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.version\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#320\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.version\" class=\"fn\">version</a>(&amp;self) -&gt; <a class=\"struct\" href=\"http/version/struct.Version.html\" title=\"struct http::version::Version\">Version</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated version.</p>\n<h5 id=\"examples-4\"><a href=\"#examples-4\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response: Response&lt;()&gt; = Response::default();\n<span class=\"macro\">assert_eq!</span>(response.version(), Version::HTTP_11);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.version_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#335\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.version_mut\" class=\"fn\">version_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"http/version/struct.Version.html\" title=\"struct http::version::Version\">Version</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated version.</p>\n<h5 id=\"examples-5\"><a href=\"#examples-5\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>response: Response&lt;()&gt; = Response::default();\n<span class=\"kw-2\">*</span>response.version_mut() = Version::HTTP_2;\n<span class=\"macro\">assert_eq!</span>(response.version(), Version::HTTP_2);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.headers\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#349\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.headers\" class=\"fn\">headers</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated header field map.</p>\n<h5 id=\"examples-6\"><a href=\"#examples-6\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response: Response&lt;()&gt; = Response::default();\n<span class=\"macro\">assert!</span>(response.headers().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.headers_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#365\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.headers_mut\" class=\"fn\">headers_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated header field map.</p>\n<h5 id=\"examples-7\"><a href=\"#examples-7\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>response: Response&lt;()&gt; = Response::default();\nresponse.headers_mut().insert(HOST, HeaderValue::from_static(<span class=\"string\">&quot;world&quot;</span>));\n<span class=\"macro\">assert!</span>(!response.headers().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#379\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.extensions\" class=\"fn\">extensions</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"http/extensions/struct.Extensions.html\" title=\"struct http::extensions::Extensions\">Extensions</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated extensions.</p>\n<h5 id=\"examples-8\"><a href=\"#examples-8\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response: Response&lt;()&gt; = Response::default();\n<span class=\"macro\">assert!</span>(response.extensions().get::&lt;i32&gt;().is_none());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#395\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.extensions_mut\" class=\"fn\">extensions_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"http/extensions/struct.Extensions.html\" title=\"struct http::extensions::Extensions\">Extensions</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated extensions.</p>\n<h5 id=\"examples-9\"><a href=\"#examples-9\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>response: Response&lt;()&gt; = Response::default();\nresponse.extensions_mut().insert(<span class=\"string\">&quot;hello&quot;</span>);\n<span class=\"macro\">assert_eq!</span>(response.extensions().get(), <span class=\"prelude-val\">Some</span>(<span class=\"kw-2\">&amp;</span><span class=\"string\">&quot;hello&quot;</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.body\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#409\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.body\" class=\"fn\">body</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated HTTP body.</p>\n<h5 id=\"examples-10\"><a href=\"#examples-10\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response: Response&lt;String&gt; = Response::default();\n<span class=\"macro\">assert!</span>(response.body().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.body_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#424\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.body_mut\" class=\"fn\">body_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated HTTP body.</p>\n<h5 id=\"examples-11\"><a href=\"#examples-11\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>response: Response&lt;String&gt; = Response::default();\nresponse.body_mut().push_str(<span class=\"string\">&quot;hello world&quot;</span>);\n<span class=\"macro\">assert!</span>(!response.body().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_body\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#439\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.into_body\" class=\"fn\">into_body</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Consumes the response, returning just the body.</p>\n<h5 id=\"examples-12\"><a href=\"#examples-12\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response = Response::new(<span class=\"number\">10</span>);\n<span class=\"kw\">let </span>body = response.into_body();\n<span class=\"macro\">assert_eq!</span>(body, <span class=\"number\">10</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#454\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.into_parts\" class=\"fn\">into_parts</a>(self) -&gt; (<a class=\"struct\" href=\"http/response/struct.Parts.html\" title=\"struct http::response::Parts\">Parts</a>, T)</h4></section></summary><div class=\"docblock\"><p>Consumes the response returning the head and body parts.</p>\n<h5 id=\"examples-13\"><a href=\"#examples-13\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response: Response&lt;()&gt; = Response::default();\n<span class=\"kw\">let </span>(parts, body) = response.into_parts();\n<span class=\"macro\">assert_eq!</span>(parts.status, StatusCode::OK);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/http/response.rs.html#473-475\">source</a><h4 class=\"code-header\">pub fn <a href=\"http/response/struct.Response.html#tymethod.map\" class=\"fn\">map</a>&lt;F, U&gt;(self, f: F) -&gt; <a class=\"struct\" href=\"http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;U&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; U,</span></h4></section></summary><div class=\"docblock\"><p>Consumes the response returning a new response with body mapped to the\nreturn type of the passed in function.</p>\n<h5 id=\"examples-14\"><a href=\"#examples-14\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>response = Response::builder().body(<span class=\"string\">&quot;some string&quot;</span>).unwrap();\n<span class=\"kw\">let </span>mapped_response: Response&lt;<span class=\"kw-2\">&amp;</span>[u8]&gt; = response.map(|b| {\n  <span class=\"macro\">assert_eq!</span>(b, <span class=\"string\">&quot;some string&quot;</span>);\n  b.as_bytes()\n});\n<span class=\"macro\">assert_eq!</span>(mapped_response.body(), <span class=\"kw-2\">&amp;</span><span class=\"string\">&quot;some string&quot;</span>.as_bytes());</code></pre></div>\n</div></details></div></details>",0,"tungstenite::handshake::client::Response","tungstenite::handshake::server::Response","tungstenite::handshake::server::ErrorResponse"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Response%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/http/response.rs.html#484\">source</a><a href=\"#impl-Default-for-Response%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http/response.rs.html#486\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","tungstenite::handshake::client::Response","tungstenite::handshake::server::Response","tungstenite::handshake::server::ErrorResponse"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Response%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/http/response.rs.html#491\">source</a><a href=\"#impl-Debug-for-Response%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/http/response.rs.html#492\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","tungstenite::handshake::client::Response","tungstenite::handshake::server::Response","tungstenite::handshake::server::ErrorResponse"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()