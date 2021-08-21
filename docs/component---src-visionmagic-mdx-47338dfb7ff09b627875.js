(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Cb5Q:function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return l})),i.d(t,"default",(function(){return h}));var a=i("Fcif"),o=i("+I+c"),s=(i("mXGw"),i("/FXl")),n=i("TjRS"),r=i("zmid"),l=(i("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/visionmagic.mdx"}});var c=n.a;function h(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(s.b)(c,Object(a.a)({},i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"vision-magic"},"Vision Magic"),Object(s.b)("p",null,"Author: ",Object(s.b)("a",{href:"//github.com/tyt2y3",parentName:"p"},"Chris Tsang")," | Published: 2020-12-20"),Object(s.b)("hr",null),Object(s.b)("p",null,Object(s.b)("a",{href:"//www.visioncortex.org/visionmagic/",parentName:"p"},"VisionMagic Impression")," is a family of algorithms for image simplification, segmentation and vectorization."),Object(s.b)("p",null,Object(s.b)("div",{style:{padding:"78.37% 0 0 0",position:"relative"}},Object(s.b)("iframe",{src:"https://player.vimeo.com/video/491698600",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})),Object(s.b)("script",{src:"https://player.vimeo.com/api/player.js"}),Object(s.b)("p",null)),Object(s.b)("h2",{id:"premise"},"Premise"),Object(s.b)("p",null,"The fundamental information result from visual perception is shape. For example, we would describe ‘there is an orange on a basket’ or more conceptually ‘there is a circle above a triangle’."),Object(s.b)("p",null,"If we regard simplification as a process of information reduction, we could imagine information being taken away from an image shape by shape, starting from the least important shapes. At the same time, we can also simplify each shape in the image to make it ‘less fractal’."),Object(s.b)("p",null,"By controlling this reduction process, we would be able to control the amount of visual information in an image in a quantitative manner."),Object(s.b)("p",null,"Under this understanding, segmentation is an extreme degree of simplification, while vectorization is a slight degree of simplification."),Object(s.b)("h2",{id:"the-clustering-algorithm"},"The Clustering Algorithm"),Object(s.b)("p",null,"The algorithm is hierarchical in nature and the idea is best described by the following verse:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"On an unclaimed land, there are villages. Villages ally with each other to form tribes. Tribes conquer each other and form Kingdoms. Kingdoms clashes with each other and form empires. Empires breakdown and finally the entire earth becomes one union.")),Object(s.b)("h3",{id:"stage-1-clustering"},"Stage 1: clustering"),Object(s.b)("p",null,"Clustering is a process to connect pixels of similar colors into clusters. Each cluster have a unique position and shape. There is well known algorithm to perform clustering and Vision Magic’s implementation is essentially same as ",Object(s.b)("a",{href:"//en.wikipedia.org/wiki/Hoshen%E2%80%93Kopelman_algorithm",parentName:"p"},"Kopelman Algorithm"),"."),Object(s.b)("h3",{id:"stage-2-hierarchical-clustering"},"Stage 2: hierarchical clustering"),Object(s.b)("p",null,"Hierarchical clustering is a process to build an image tree from the clusters of stage 1. Vision Magic builds a binary tree bottom up. In preparation, clusters are sorted by their size. Starting from the smallest, in each iteration, a cluster is merged into the closest cluster. There are different formulas for ‘close’, but it generally involves comparing the average colors between neighboring clusters."),Object(s.b)("h3",{id:"stage-3-tree-walking"},"Stage 3: tree walking"),Object(s.b)("p",null,"In image vectorization, we would walk the tree from top to bottom, trace each layer, and stack the vector paths on the output canvas. As if a painter paints on an empty canvas, he would lay down background first and then overlay objects atop, and finally add on details."),Object(s.b)("h2",{id:"simplification"},"Simplification"),Object(s.b)("p",null,"In image simplification, there are multiple dimensions of information which can be controlled quantitatively:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Shape details: proportional to how many points we use to outline each shape"),Object(s.b)("li",{parentName:"ol"},"Fidelity: proportional to how many nodes we retain from the image tree"),Object(s.b)("li",{parentName:"ol"},"Color levels: proportional to how densely we sample the image tree layers")),Object(s.b)("h3",{id:"shape-simplification"},"Shape Simplification"),Object(s.b)("p",null,"Vision Magic currently chose the Ramer-Douglas-Peucker algorithm for shape simplification. While the original algorithm is designed for open curves, Vision Magic adapted it for closed shapes. We cut a closed path into 4 sections, simplify each, and stitch them back together after path simplification. We choose the north most, east most, south most and west most points to cut a given path. Effectively the simplest possible shape is a diamond with four points. However in practice, it is not desirable to have shapes with sharp corners, and so we would smooth them with a 4-point scheme as described in VTracer."),Object(s.b)(r.a,{src:"visionmagic/simplification-shape-details.png",text:"Left to right: gradual reduction of shape details",mdxType:"Figure"}),Object(s.b)("h3",{id:"fidelity"},"Fidelity"),Object(s.b)("p",null,"It has to be understood that statistically there are exponentially more nodes as we decrease the cluster size. There is one root node known as the image background, but as many leaf nodes as there are number of pixels. As such, fidelity is actually a cutoff which we discard all clusters smaller than a desired size. When this cutoff threshold is low, we are removing salt and pepper noise but in a true color sense. As we increase this cutoff, structures are being discarded. Further increasing this cutoff, the image would become more abstract, and in the end only one solid background will be left."),Object(s.b)("p",null,"It is important to note that this background color is not the mean pixel color of the image, but is the average color of the largest cluster, which conceptually is the ‘base tone’ of the given image."),Object(s.b)(r.a,{src:"visionmagic/simplification-fidelity.png",text:"Left: low fidelity; Right: high fidelity",mdxType:"Figure"}),Object(s.b)("h3",{id:"color-levels"},"Color Levels"),Object(s.b)("p",null,"More color levels mean finer gradient. Color levels set to 256 means utilizing the full color precision of RGB888. Setting color levels to 16 meaning a cluster has to have at least a color difference of 16 in order to be considered a separate cluster with the cluster on the upper level. In effect, tuning down the color levels would create a retro 8-bit color look. While the number of colors is limited, the color is still faithful to the original image."),Object(s.b)(r.a,{src:"visionmagic/simplification-color-levels.png",text:"Left: less color levels; Right: more color levels",mdxType:"Figure"}),Object(s.b)("h2",{id:"segmentation"},"Segmentation"),Object(s.b)("p",null,"Segmentation follows stage 3 of the algorithm. Similar clusters are grouped together by the ",Object(s.b)("a",{href:"//docs.rs/visioncortex/latest/visioncortex/disjoint_sets",parentName:"p"},"disjoint sets")," algorithm, where each set of the result represents a solid color patch. For each cluster, its neighbours are being considered. If the color difference is smaller than a defined deviation, they will be put into the same union. To prevent grouping too greedily, after the first union, subsequent union would require stricter thresholds. To output segmentation result, each set would be rendered by the average color of all its constituting clusters."),Object(s.b)("p",null,"After this stage, there would still be unwanted patches in the output. The output would further be re-clustered by Stage 1 to 3 described before, and an aggregation pass be applied afterwards. It would prune away smaller patches by merging into the closest (in terms of color) cluster if deviation would allow."),Object(s.b)("p",null,"Finally, to output result, each aggregate would be rendered by its original cluster color."),Object(s.b)(r.a,{src:"visionmagic/segmentation-aggregation.png",text:"Left: original; Mid: initial segmentation; Right: after aggregation",mdxType:"Figure"}),Object(s.b)("h2",{id:"the-implementation"},"The Implementation"),Object(s.b)("p",null,"The described algorithms are implemented as reusable components under ",Object(s.b)("a",{href:"//github.com/visioncortex/visionmagic",parentName:"p"},"VisionMagic"),". Together with a processing pipeline, they are designed to support real-time and interactive applications. Users can easily organize processing stages and add additional processing passes as needed."),Object(s.b)("p",null,"The ",Object(s.b)("a",{href:"//docs.rs/visionmagic/latest/visionmagic/trait.Processor.html",parentName:"p"},Object(s.b)("inlineCode",{parentName:"a"},"Processor"))," trait is the interface that future additions of algorithms will conform to. It also allows us to support video streaming applications in the future."),Object(s.b)("h2",{id:"impressionism"},"Impressionism"),Object(s.b)("p",null,"The above methodology is designed to imitate visual perception in humans. It is thus no surprising that resulting images exhibit characteristics similar to paintings drawn by Artists. As the name suggests, it is heavy inspired by a painting technique that we called ‘Impressionism’ for the meaning it convey during a brief period of art history."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"Simplification Parameters: Shape Details  = 27983, Fidelity = 51256, Color Levels = 16\nPhotoshop ‘Oil Paint’ filter: Stylization = 0.1, Cleanliness = 10.0, Scale = 0.1, Bristle Detail = 6.5, Light = -60, Shine = 1.0\n")),Object(s.b)(r.a,{src:"visionmagic/visionmagic-impressionism.png",text:"Left: Artwork generated by VisionMagic; Right: Water Lilies Painting by Claude Monet",mdxType:"Figure"}),Object(s.b)("p",null,"Based on photo by ",Object(s.b)("a",{href:"https://unsplash.com/@ravinepz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Ravi Sharma")," on ",Object(s.b)("a",{href:"https://unsplash.com/photos/gfP_Cz0MaFs"},"Unsplash")))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/visionmagic.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-visionmagic-mdx-47338dfb7ff09b627875.js.map