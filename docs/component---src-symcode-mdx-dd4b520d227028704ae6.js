(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AJ3O:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a("Fcif"),o=a("+I+c"),i=(a("mXGw"),a("/FXl")),s=a("TjRS"),r=a("zmid"),c=(a("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/symcode.mdx"}});var b=s.a;function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"symcode-the-symbolic-barcode-for-humans-and-machines"},"SymCode: The Symbolic Barcode for Humans and Machines"),Object(i.b)("p",null,"Authors: ",Object(i.b)("a",{href:"//github.com/tyt2y3",parentName:"p"},"Chris Tsang")," and ",Object(i.b)("a",{href:"//github.com/shpun817",parentName:"p"},"Sanford Pun")," | Published: 2021-04-03"),Object(i.b)("hr",null),Object(i.b)("p",null,"This is our story of the design and implementation of a symbolic barcode system.\nTry the ",Object(i.b)("a",{href:"https://symcode.visioncortex.org/",target:"_blank"},"Demo Web App"),"."),Object(i.b)("iframe",{src:"https://player.vimeo.com/video/529877814?muted=1",style:{width:"100%",height:"80vh",maxHeight:"75vw"},frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0}),Object(i.b)("h2",{id:"forewords"},"Forewords"),Object(i.b)("p",null,"If you are lucky enough to live in a place where an Amazon Go store is nearby, you definitely should visit it. It is packed full of esoteric technology that enthusiast like us get super intrigued. One item that caught our eyes was the labels on the salad and sandwiches in the ready-made food section."),Object(i.b)(r.a,{text:"Photo within an Amazon Go store",src:"symcode/Amazon Go Seattle - crop.jpg",mdxType:"Figure"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Photo by Sikander Iqbal via ",Object(i.b)("a",{href:"https://commons.wikimedia.org/wiki/File:Amazon_Go_-_Seattle_(20180804111213).jpg",parentName:"p"},"Wikimedia Commons"))),Object(i.b)("p",null,"There printed a matrix of cute little circles and squares! It must be a barcode of some sort. Our attempt to decipher the '",Object(i.b)("a",{href:"/reversi-docs",parentName:"p"},"Amazon Reversi Code"),"' was futile, but this is the start of the story."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,"A bit of context for the unfamiliar reader, the name Barcode is referring to the labels we still find in virtually every packaged products today. Barcode encode data by varying the widths and spacings of the vertical bars, which are to be scanned by a laser beam crossing horizontally. With the advent of image sensors, 2D barcodes were developed, where QR code and Aztec Code are some of the most well-known."),Object(i.b)("p",null,"In general, 2D barcode scanner works as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Locate the finders. These finders act as a trigger to tell the scanner that 'here is a barcode!'. The finders have to be easily detectable yet not interfering with the data modules.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Attempt to scan and read metadata surrounding the finder candidates. The metadata usually includes a format code and timing patterns.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If the previous step succeeds, the scanner would sample the entire barcode to construct a raw bit string. A checksum operation is done to detect errors.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If the previous step succeeds, the payload is extract from the raw bits, which usually involves some bit masking and shuffling."))),Object(i.b)("p",null,"This framework has aged well and they are quite robust and low-cost to implement in embedded systems. However, they are meant to be read by machines and not by our naked eyes. They are not designed for aesthetics and are impossible for humans to comprehend."),Object(i.b)("h2",{id:"goals-and-constraints"},"Goals and Constraints"),Object(i.b)("p",null,"Our goal is to design a barcode system that are both human-readable and machine-readable. We now turn our attention to human readability by studying human languages."),Object(i.b)("p",null,"Machines run on bits, so we can say the alphabet consists of 0 and 1. In human languages, we have a larger set of alphabets. In English, we have 26 distinct lowercase letters. In Korean, characters are constructed by composing 2 to 6 elements from a set of 40 distinct Jamo."),Object(i.b)("p",null,"There is a direct tradeoff between information density and visual ambiguity. If the symbol set is too large, humans would have difficulty in remembering all of them. In addition, there may be some visually similar symbols that are hard to disambiguate. If the symbol set is too small, the same message has to be encoded with more symbols, which again, humans often have a hard time in processing long strings."),Object(i.b)("p",null,"We determined that a symbol set in the range of 16 to 64 symbols is a good balance."),Object(i.b)("h2",{id:"design-of-symbols"},"Design of symbols"),Object(i.b)("p",null,"What makes good symbols?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Prominence"),Object(i.b)("p",{parentName:"li"},"First, the symbols have to stand out from the natural world, to manifest that they are created deliberately to convey a message but not a result of some natural phenomenon.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Repeatable"),Object(i.b)("p",{parentName:"li"},"Symbols are constructed with specific tools and processes that can be taught to other people. The meaning of a symbol should remain the same when reproduced, in which variation is tolerated.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Distinctive"),Object(i.b)("p",{parentName:"li"},"Symbols within a set should not be similar with each other and have distinctive features allowing the reader to resolve ambiguity between symbols.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Aesthetics"),Object(i.b)("p",{parentName:"li"},"Finally, good symbols should observe the aesthetics rules of the human eye, including being anti-symmetric, rotational symmetric, balanced and consistent. As a pointer, the ",Object(i.b)("a",{href:"https://en.wikipedia.org/wiki/Gestalt_psychology",parentName:"p"},"Gestalt Principles")," are fantastic rules of thumb."))),Object(i.b)("p",null,"With the above rules in mind, we designed a minimalistic symbol set. Each symbol is composed of multiple triangles, the basic geometric primitive. Each symbol is symmetric or anti-symmetric in overall, but exhibits asymmetry internally. They are like Tangram, in which a human child can easily reproduce the symbols by assembly some triangular pieces together."),Object(i.b)("p",null,"The next section would quantitatively analyze and justify this design methodology."),Object(i.b)("h2",{id:"trace-of-shapes"},"Trace of shapes"),Object(i.b)("p",null,"The naive way to match a shape against a symbol set is to perform a linear search, XOR it with every symbol and then chooses the one with the lowest delta. It works in principle, but is inefficient. Ideally, an algorithm can condense a complex shape into a feature vector, which we can lookup in the feature space of the symbol set for the nearest neighbour and arrive to a match."),Object(i.b)("p",null,"Instead of using an array of real numbers, we devised that an array of bits are sufficient to capture the essence of symbols, and from now on we refer this bit string as 'trace'."),Object(i.b)("h3",{id:"the-english-alphabet"},"The English alphabet"),Object(i.b)("p",null,"Now, let us take a closer look at the lowercase English alphabet set to illustrate this idea."),Object(i.b)(r.a,{text:"English alphabets",src:"symcode/english alphabet.svg",height:"200px",mdxType:"Figure"}),Object(i.b)("p",null,"First off, we can classify the 26 alphabets as either tall or short, giving:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Tall: b d f g h j k l p q t y\nShort: a c e i m n o r s u v w x z\n")),Object(i.b)("p",null,"Next, we can divide the letter into two halfs horizontally and compare their weights:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Left > right: b c f h k p r t y\nLeft < right: a d g q\nLeft ~ right: e i j l m n o s u v w x z\n")),Object(i.b)("p",null,"Then, we can divide the letter into two halfs vertically and compare their weights:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Up > down: f m n p q r y\nUp < down: b d h k u\nUp ~ down: a c e g i j l o s t v w x z\n")),Object(i.b)("p",null,"At this point, we had the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"a: SR=\nb: TLD\nc: SL=\nd: TRD\ne: S==\nf: TLU\ng: TR=\nh: TLD\ni: S==\nj: T==\nk: TLD\nl: T==\nm: S=U\nn: S=U\no: S==\np: TLU\nq: TRU\nr: SLU\ns: S==\nt: TLD\nu: S=D\nv: S==\nw: S==\nx: S==\ny: TLU\nz: S==\n")),Object(i.b)("p",null,"Group by trace:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"SR=: a\nTLD: b h k\nSL=: c\nTRD: d\nS==: e i o s v w x z\nTL=: t\nTR=: g\nT==: j l \nS=U: m n\nTLU: f p y\nTRU: q\nSLU: r\nS=D: u\n")),Object(i.b)("p",null,"Which is a surprisingly good classifier using only three comparisons. We can do more trinary comparisons on smaller partitions to further differentiate the collisions, but our investigation on English alphabets ends here for the scope of this article."),Object(i.b)("h3",{id:"symcode"},"SymCode"),Object(i.b)("p",null,"Our trace for SymCode symbols follows a similar scheme. We define the symbol traces starting from the three comparisons defined in the previous section."),Object(i.b)("p",null,"The pixel count in each of the four quadrants of a symbol (in order of top-left, top-right, bottom-left, bottom-right) are denoted by non-negative quantities ",Object(i.b)("inlineCode",{parentName:"p"},"a"),",",Object(i.b)("inlineCode",{parentName:"p"},"b"),",",Object(i.b)("inlineCode",{parentName:"p"},"c"),",",Object(i.b)("inlineCode",{parentName:"p"},"d")," respectively, the three comparisons are defined as follows:"),Object(i.b)(r.a,{text:"Grid quadrants",src:"symcode/grid abcd.svg",height:"200px",mdxType:"Figure"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Vertical comparison = ",Object(i.b)("inlineCode",{parentName:"li"},"(a+b)")," vs ",Object(i.b)("inlineCode",{parentName:"li"},"(c+d)")),Object(i.b)("li",{parentName:"ul"},"Horizontal comparison = ",Object(i.b)("inlineCode",{parentName:"li"},"(a+c)")," vs ",Object(i.b)("inlineCode",{parentName:"li"},"(b+d)")),Object(i.b)("li",{parentName:"ul"},"Diagonal comparison = ",Object(i.b)("inlineCode",{parentName:"li"},"(a+d)")," vs ",Object(i.b)("inlineCode",{parentName:"li"},"(b+c)"))),Object(i.b)("p",null,"Below are two examples:"),Object(i.b)(r.a,{text:"LongRR symbol image",src:"symcode/LongRR.png",mdxType:"Figure"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Vertical comparison = Top ~ Bottom"),Object(i.b)("li",{parentName:"ul"},"Horizontal comparison = Left > Right"),Object(i.b)("li",{parentName:"ul"},"Diagonal comparison = Backslash ~ Slash")),Object(i.b)(r.a,{text:"SmallDoubleLR symbol image",src:"symcode/SmallDoubleLR.png",mdxType:"Figure"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Vertical comparison = Top ~ Bottom"),Object(i.b)("li",{parentName:"ul"},"Horizontal comparison = Left ~ Right"),Object(i.b)("li",{parentName:"ul"},"Diagonal comparison = Backslash > Slash")),Object(i.b)("p",null,"Each comparison has ",Object(i.b)("strong",{parentName:"p"},"3 possible outcomes (","<",", ",">",", ~)"),". For simplicity, we assign ",Object(i.b)("strong",{parentName:"p"},"2 bits")," to encode each comparison. Therefore, this naive implementation uses ",Object(i.b)("strong",{parentName:"p"},"3 * 2 = 6 bits")," to store each trace."),Object(i.b)("p",null,"The above worked well enough for sets of 16 symbols, but it was found inadequate for 32 symbols. Acute32 requires more comparisons for traces."),Object(i.b)("h2",{id:"trace-of-symcode"},"Trace of SymCode"),Object(i.b)("p",null,"The following figure is Acute32's alphabet set."),Object(i.b)(r.a,{text:"Acute32 alphabet set",src:"symcode/alphabet2.png",width:"480px",mdxType:"Figure"}),Object(i.b)("p",null,"Apart from the three basic comparisons explained in the previous section (",Object(i.b)("em",{parentName:"p"},"V,H,D"),"), we also compare every pair of the four quadrants (each quadrant is compared to every other quadrant exactly once), requiring ",Object(i.b)("strong",{parentName:"p"},"an extra of ",Object(i.b)("em",{parentName:"strong"},"4 choose 2")," = 6 comparisons")," (",Object(i.b)("em",{parentName:"p"},"ab, cd, ac"),", ...). The last comparison ",Object(i.b)("em",{parentName:"p"},"efgh")," is explained in the details below."),Object(i.b)(r.a,{text:"Acute32 trace counts",src:"symcode/trace_counts_balanced.png",width:"600px",mdxType:"Figure"}),Object(i.b)("details",null,Object(i.b)("h3",{id:"side-note-efgh"},"Side note: ",Object(i.b)("inlineCode",{parentName:"h3"},"efgh")),Object(i.b)("p",null,"It is important to note that not any arbitrary extra comparisons are effective. The rule of thumb is each extra comparison should introduce new information than the existing ones, making them ",Object(i.b)("strong",{parentName:"p"},"(at least partially) independent")," of each other. In general, comparisons that use ",Object(i.b)("strong",{parentName:"p"},"different numbers of blocks")," should be independent. For example, in the previous section all comparisons used 2 blocks vs 2 blocks, so the extra ones in this section, which use 1 block vs 1 block, are all (partially) independent of the previous ones. This is because as more blocks are being considered at once, the scope of analysis becomes irreversibly broader - just like how you cannot retrieve neither ",Object(i.b)("em",{parentName:"p"},"x")," nor ",Object(i.b)("em",{parentName:"p"},"y")," from the sum ",Object(i.b)("em",{parentName:"p"},"x+y"),"."),Object(i.b)("p",null,"Adding the extra ones results in a total of 3 + 6 = 9 comparisons. Using 2 bits to encode each, we are using 9 * 2 = ",Object(i.b)("strong",{parentName:"p"},"18 bits")," to store each trace in Acute32."),Object(i.b)("p",null,'Denote a comparison operation by "U vs V". The vertical, horizontal, and diagonal comparisons become "Top vs Bottom", "Left vs Right", and "Backslash vs Slash" respectively. The rest of the comparisons become "a vs b", "c vs d", and so on. We set the bits as follows:'),Object(i.b)("h3",{id:"for-each-comparison-u-vs-v"},"For each comparison U vs V"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'11 means "U ',"~",' V"'),Object(i.b)("li",{parentName:"ul"},'10 means "U ',">",' V"'),Object(i.b)("li",{parentName:"ul"},'01 means "U ',"<",' V"'),Object(i.b)("li",{parentName:"ul"},"00 is invalid")),Object(i.b)("p",null,"The trace of all 1's, which happens when all four quadrants of the symbol share (approximately) the same number of dots, is shared by about one-third of the entire Acute32. This makes approximately one-third of the searches scan through 12 symbol images, which is 4 times that of most of the rest, which only scan through 3 symbol images."),Object(i.b)("p",null,"Our solution here is one more comparison."),Object(i.b)(r.a,{text:"efgh (top/bottom/left/right) grid",src:"symcode/efgh_grid.png",mdxType:"Figure"}),Object(i.b)("p",null,"We further partition the grid of each symbol image so that there are 4x4 = 16 small blocks, and denote the top/bottom/left/right blocks along the edge by ",Object(i.b)("em",{parentName:"p"},"e,f,g,h"),' respectively, as illustrated in the figure above. Next, we define an "',Object(i.b)("em",{parentName:"p"},"ef/gh"),' comparison" which compares ',Object(i.b)("em",{parentName:"p"},"e+f")," to ",Object(i.b)("em",{parentName:"p"},"g+h"),"."),Object(i.b)("p",null,"Now we have a more balanced distribution.")),Object(i.b)("h3",{id:"advantages-of-traces"},"Advantages of traces"),Object(i.b)("p",null,"The trace partitions the symbol set into smaller, mutually-exclusive subsets. This enhances robustness against noisy inputs."),Object(i.b)("p",null,"As searching through traces is much more efficient than comparing with each symbol individually, traces also help with performance."),Object(i.b)("p",null,"Most importantly, it provides us a guidance in designing the symbols to maximize differences within the symbol set."),Object(i.b)("h2",{id:"scanning-pipeline"},"Scanning Pipeline"),Object(i.b)("p",null,"The pipeline of SymCode scanner consists of 4 stages: ",Object(i.b)("inlineCode",{parentName:"p"},"finder"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fitter"),", ",Object(i.b)("inlineCode",{parentName:"p"},"recognizer"),", ",Object(i.b)("inlineCode",{parentName:"p"},"decoder"),"."),Object(i.b)("p",null,"Each stage below begins with a more general description of the processing stage (general across any SymCode), followed by explanation of the implementation of Acute32."),Object(i.b)("h3",{id:"stage-1-locating-finder-candidates"},"Stage 1: Locating Finder Candidates"),Object(i.b)("p",null,"We first binarize the input color image using an adaptive thresholding strategy, shapes are then extracted from a binary image by clustering."),Object(i.b)("p",null,"The goal of this stage is to find the positions of all finder candidates in the frame."),Object(i.b)("p",null,"A minimum of 4 feature points is needed because at least ",Object(i.b)("strong",{parentName:"p"},"4 point correspondences")," are required to fit a ",Object(i.b)("strong",{parentName:"p"},"perspective transform"),"."),Object(i.b)("h3",{id:"acute32"},"Acute32"),Object(i.b)("p",null,"Acute32 uses circles as finders because they are distinct from the heavily cornered symbol set. The 4 finders are arranged in a Y shaped manner to break the rotational symmetry with itself."),Object(i.b)("p",null,"The advantage of using a circle is that, in general, it always transforms into an ellipse under any perspective distortion, making it relatively easy to detect."),Object(i.b)("p",null,"The disadvantage is the ",Object(i.b)("strong",{parentName:"p"},"lack of corners in circles"),". It is too easy to detect false positives because there are indeed many circles in real life."),Object(i.b)("h3",{id:"stage-2-fitting-perspective-transform"},"Stage 2: Fitting Perspective Transform"),Object(i.b)("p",null,'We define the "',Object(i.b)("strong",{parentName:"p"},"image space"),'" as the space of pixels on the ',Object(i.b)("strong",{parentName:"p"},"input frame"),', and the "',Object(i.b)("strong",{parentName:"p"},"object space"),'" as the space of pixels on the ',Object(i.b)("strong",{parentName:"p"},"code image")," (whose boundary is predefined). An image space is simply the input frame image. An object space can either be generated using a code instance, or by rectifying the corresponding image space."),Object(i.b)(r.a,{text:"Left: image space; Right: object space",src:"symcode/image_object_space_example.png",width:"800px",mdxType:"Figure"}),Object(i.b)("p",null,"In essence, this stage chooses the correct perspective transform to be used in the next stage."),Object(i.b)("p",null,"Each perspective transform ",Object(i.b)("strong",{parentName:"p"},"converts the image space into ",Object(i.b)("em",{parentName:"strong"},"an")," object space")," (but not necessarily the correct one) and ",Object(i.b)("strong",{parentName:"p"},"is defined by (at least) 4 point pairs")," (source and destination points), where each pair consists of ",Object(i.b)("strong",{parentName:"p"},"a point in the image space")," and ",Object(i.b)("strong",{parentName:"p"},"the other one in the object space"),"."),Object(i.b)("p",null,"Since we have obtained a list of finder candidates from the previous stage, we can extract ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"n")," feature points in the image space")," from them. Matching the 4-permutations of them to the ",Object(i.b)("strong",{parentName:"p"},"4 predefined feature points in the object space")," gives us at most ",Object(i.b)("em",{parentName:"p"},"n permute 4 = k")," perspective transforms."),Object(i.b)("p",null,"It is inefficient to accept each transformation and generate ",Object(i.b)("em",{parentName:"p"},"k")," object spaces to proceed to next stage. Therefore, we need to design a method to evaluate each transform and chooses which ones to proceed. The simplest way is to ",Object(i.b)("strong",{parentName:"p"},"define some extra feature points in the object space as ",Object(i.b)("em",{parentName:"strong"},"check points")),", which are ",Object(i.b)("strong",{parentName:"p"},"re-projected to the image space"),", and ",Object(i.b)("strong",{parentName:"p"},"check if the feature exists there"),", and reject the candidate otherwise."),Object(i.b)("h3",{id:"acute32-1"},"Acute32"),Object(i.b)("p",null,"The re-projection method mentioned above could not work for us because circles do not provide extra feature points for us to verify."),Object(i.b)("p",null,"Instead, we take each of the ",Object(i.b)("em",{parentName:"p"},"k")," perspective transforms and calculates an error value."),Object(i.b)("p",null,"We define 4 ",Object(i.b)("strong",{parentName:"p"},"object check points")," as the top of the 4 circle finders in the object space. Re-projecting these 4 points to the image space, we obtain the ",Object(i.b)("strong",{parentName:"p"},"image check points")," (",Object(i.b)("em",{parentName:"p"},"i1")," to ",Object(i.b)("em",{parentName:"p"},"i4"),"). Furthermore, we denote the ",Object(i.b)("strong",{parentName:"p"},"centres of the circle finders")," in the ",Object(i.b)("strong",{parentName:"p"},"image space"),", in the same order as the previously defined points, by ",Object(i.b)("em",{parentName:"p"},"c1")," to ",Object(i.b)("em",{parentName:"p"},"c4"),"."),Object(i.b)("p",null,"Our metric of evaluation relies on ",Object(i.b)("strong",{parentName:"p"},"magnitude and direction")," of the difference vector. 4 vectors interest us here: the vectors from the centres of finders to the image check points, and we denote them by ",Object(i.b)("em",{parentName:"p"},"v1")," to ",Object(i.b)("em",{parentName:"p"},"v4")," respectively."),Object(i.b)(r.a,{text:"Transform evaluation points and vectors: the 4 green vectors are v1 to v4",src:"symcode/transform_evaluation.png",mdxType:"Figure"}),Object(i.b)("p",null,"We observed that given a correct transform, the 4 green vectors are consistently pointing in the same direction, with their magnitudes less uniform but still very similar. We found it effective to choose the transform with the ",Object(i.b)("strong",{parentName:"p"},"minimum variance")," among ",Object(i.b)("em",{parentName:"p"},"v1")," to ",Object(i.b)("em",{parentName:"p"},"v4"),"."),Object(i.b)("h3",{id:"stage-3-recognizing-symbols"},"Stage 3: Recognizing Symbols"),Object(i.b)("p",null,"In the previous stage, we have obtained a perspective transform which converts between the image and object spaces. Next, we're going to rectify the input image into a code image, and recognize the symbols on it."),Object(i.b)("h4",{id:"rectify-the-image-space"},"Rectify the image space"),Object(i.b)("p",null,"Once we have a transform that we believe is correct, the object space can be obtained by applying it on the image space. We sample the image with bilinear interpolation."),Object(i.b)("h4",{id:"recognition"},"Recognition"),Object(i.b)(r.a,{text:"Rectified image (code image in the correct object space)",src:"symcode/object_space_example.png",mdxType:"Figure"}),Object(i.b)("p",null,"Assuming the transform is correct, the coordinates of the symbols on the code image should be close to the ",Object(i.b)("em",{parentName:"p"},"anchors")," we defined in the object space."),Object(i.b)(r.a,{text:"Recognition process marked by bounding boxes",src:"symcode/recognition_demo.png",mdxType:"Figure"}),Object(i.b)("p",null,"The bounding boxes in blue are all clusters found on the code image. The boxes in red are the grouped clusters used to recognize each symbol."),Object(i.b)("p",null,"Once we have the images, we can ",Object(i.b)("strong",{parentName:"p"},"evaluate their traces")," and compare them with the ones in our symbol library, obtaining ",Object(i.b)("strong",{parentName:"p"},"a small number of candidates")," for each symbol image. Each of these candidates is compared to the symbol image and the one with the ",Object(i.b)("strong",{parentName:"p"},"lowest delta")," is the final recognized symbol."),Object(i.b)("p",null,"Each symbol is mapped to a unique bit string, and they are concatenated into a longer bit string."),Object(i.b)("h3",{id:"stage-4-decode-the-symcode"},"Stage 4: Decode the SymCode"),Object(i.b)("p",null,"This stage performs error detection (possibly correction) and extract the payload."),Object(i.b)("h3",{id:"acute32-2"},"Acute32"),Object(i.b)("p",null,"As there are 32 symbols in the set of Acute32, each symbol can encode 5 bits. There are 5 data symbols and 4 finders in the 3x3 configuration. It can easily be extended to a 6x4 to carry more data. For now, each ",Object(i.b)("inlineCode",{parentName:"p"},"SymCode")," instance encodes ",Object(i.b)("em",{parentName:"p"},"25")," raw bits, where ",Object(i.b)("em",{parentName:"p"},"20")," bits are payload and ",Object(i.b)("em",{parentName:"p"},"5")," bits are CRC checksum."),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"We developed a theoretic as well as a programming framework for designing and implementing symbolic barcodes. The programming library is available as ",Object(i.b)("a",{href:"https://github.com/visioncortex/symcode",parentName:"p"},Object(i.b)("inlineCode",{parentName:"a"},"symcode")),". For those who simply want to integrate SymCode into your application, please refer to the wasm distribution ",Object(i.b)("a",{href:"https://github.com/visioncortex/acute32",parentName:"p"},Object(i.b)("inlineCode",{parentName:"a"},"acute32"))," which is ready to use in any browser based Javascript projects."),Object(i.b)("h2",{id:"about-vision-cortex"},"About Vision Cortex"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"Like everything metaphysical the harmony between thought and reality is to be found in the grammar of the language." - Ludwig Wittgenstein')),Object(i.b)("p",null,"Communication is metaphysical. Communication between two humans is a language game. Communication between humans and machines in a purely visual manner is a complex language game. The syntax of the language is shapes, the grammar of the language is the spatial configuration, the semantics of the language is the meaning conveyed by these symbols."),Object(i.b)("p",null,"This story is a manifest of the philosophy behind Vision Cortex, and a glimpse of the ongoing research and development by the Vision Cortex Research Group."),Object(i.b)("p",null,"If you enjoyed the reading and appreciate our work, consider starring (on ",Object(i.b)("a",{href:"https://github.com/visioncortex/visioncortex",parentName:"p"},"GitHub"),"), discuss (on Reddit / ",Object(i.b)("a",{href:"https://github.com/visioncortex/visioncortex/discussions",parentName:"p"},"GitHub"),"), share (on ",Object(i.b)("a",{href:"https://twitter.com/visioncortex",parentName:"p"},"Twitter"),") and collaborate."))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/symcode.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-symcode-mdx-dd4b520d227028704ae6.js.map