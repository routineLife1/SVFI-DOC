import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as p,c as t,b as e,d as a,a as r,w as o,e as l}from"./app-KUdjA1gW.js";const c={},d={class:"hint-container warning"},m=e("p",{class:"hint-container-title"},"Warning",-1),u=l(`<p>SVFI supports using command line interface</p><h2 id="environment-construction" tabindex="-1"><a class="header-anchor" href="#environment-construction" aria-hidden="true">#</a> Environment construction</h2><ol><li>Create a new <code>steam_appid.txt</code> in the SVFI installation root directory and fill in the following content</li></ol><blockquote><p>1692080</p></blockquote><div class="hint-container tip"><p class="hint-container-title">Tip</p><p>Filling out this text file will cause SVFI to start in standalone application mode to avoid interference from the Steam client.</p><p>Special operations such as multi-opening of software and migration of software installation locations can be realized.</p></div><ol start="2"><li>Start the command prompt <code>cmd</code> in the root directory of the SVFI installation (if the installation location is not on the system disk, administrator privileges are not required), enter <code>one_line_shot_args.exe -h</code> and press Enter, you should be able to see something similar to the following:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: #### SVFI CLI tool by Jeanna #### [-h] -i INPUT -c CONFIG -t TASK_ID
                                         [--concat-only] [--extract-only]
                                         [--render-only] [-p] [--pipe-in]
                                         [--pipe-out]
                                         [--pipe-iw PIPE_IN_WIDTH]
                                         [--pipe-ih PIPE_IN_HEIGHT]
                                         [--pipe-in-fps PIPE_IN_FPS]
                                         [--pipe-in-pixfmt {rgb24,rgb48be,rgb48le,rgb48}]
                                         [--pipe-rgb]
                                         [--pipe-colormatrix {470bg,170m,2020ncl,709}]

To enhance Long video/image sequence quality

optional arguments:
  -h, --help            show this help message and exit

Basic Settings:
  -i INPUT, --input INPUT
                        Path of input video/image sequence folder
  -c CONFIG, --config CONFIG
                        Path of config
  -t TASK_ID, --task-id TASK_ID
                        13-digit Task id
  --concat-only         Concat Chunk only
  --extract-only        Extract input to frames Only
  --render-only         Render only
  -p, --preview         Preview Settings

Pipe Settings:
  Set the follow parameters when &#39;-mid&#39; is assigned, or you will encounter
  exceptions.Output Y4M at YUV444P10

  --pipe-in             This enables OLS to obtain input data from stdin
  --pipe-out            This enables OLS to pipe output to stdout
  --pipe-iw PIPE_IN_WIDTH
                        Width of input raw RGB, effective when --pipe-in
                        appointed
  --pipe-ih PIPE_IN_HEIGHT
                        Height of input raw RGB, effective when --pipe-in
                        appointed
  --pipe-in-fps PIPE_IN_FPS
                        Input stream FPS, effective when --pipe-in appointed
  --pipe-in-pixfmt {rgb24,rgb48be,rgb48le,rgb48}
                        Pixel format of input raw RGB, effective when --pipe-
                        in appointed
  --pipe-rgb            Pipe RGB Raw data to stdout, effective when --pipe-out
                        appointed
  --pipe-colormatrix {470bg,170m,2020ncl,709}
                        Colormatrix for RGB-YUV Conversion, effective when
                        --pipe-in appointed, --pipe-rgb not appointed


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="description-of-typical-usage-scenarios" tabindex="-1"><a class="header-anchor" href="#description-of-typical-usage-scenarios" aria-hidden="true">#</a> Description of typical usage scenarios</h2><h3 id="open-more-svfi" tabindex="-1"><a class="header-anchor" href="#open-more-svfi" aria-hidden="true">#</a> Open more SVFI</h3><p>The <code>one_line_shot_args.exe</code> (hereinafter referred to as OLS) program supports multiple openings after the above configuration is completed, and is used for multi-process tasks. Please note that this may cause a huge resource occupation.</p><p>There are three required parameters that need to be entered:</p><ul><li><code>--input</code>: The folder where the video file or image sequence to be processed is located</li><li><code>--config</code>: The configuration file generated by the SVFI GUI program, generally located in the Configs folder of the installation directory</li><li><code>--task-id</code>: task ID, a non-empty string, used to distinguish different tasks.</li></ul><h3 id="pipeline-input" tabindex="-1"><a class="header-anchor" href="#pipeline-input" aria-hidden="true">#</a> Pipeline input</h3><p>SVFI supports RGB stream input from other processes. Currently, it supports raw stream input in four pixel formats <code>rgb24</code>, <code>rgb48</code>, <code>rgb48le</code>, <code>rgb48be</code>.</p><p><code>--pipe-in</code> must be filled in to enable this feature, and additionally specify <code>--pipe-iw</code> input image pixel length, <code>--pipe-ih</code> width, <code>--pipe-in-fps</code> input stream frame Rate (float only), the pixel format of <code>--pipe-in-pixfmt</code> input.</p><h3 id="pipeline-output" tabindex="-1"><a class="header-anchor" href="#pipeline-output" aria-hidden="true">#</a> Pipeline output</h3><p>SVFI supports outputting RGB or Y4M streams of <code>YUV444P10</code> to <code>stdout</code>.</p><p><code>--pipe-out</code> must be filled in to enable this feature,</p><ul><li>If you need to output <code>YUV444P10</code>, please specify <code>--pipe-colormatrix</code> for SVFI to convert RGB to YUV stream</li><li>If you want to output the <code>RGB</code> stream, please specify <code>--pipe-rgb</code>, the specific output pixel format is controlled by the options of the configuration file, generally speaking, <code>rgb48</code> is output when high-precision workflow is enabled, and <code>rgb48</code> is output for non-high-precision workflow output <code>rgb24</code></li></ul><h3 id="command-line-example" tabindex="-1"><a class="header-anchor" href="#command-line-example" aria-hidden="true">#</a> Command line example</h3><h4 id="use-ffmpeg-for-high-precision-frame-splitting-and-input-svfi-for-processing-use-y4m-input-ffmpeg-for-compression" tabindex="-1"><a class="header-anchor" href="#use-ffmpeg-for-high-precision-frame-splitting-and-input-svfi-for-processing-use-y4m-input-ffmpeg-for-compression" aria-hidden="true">#</a> Use <code>ffmpeg</code> for high-precision frame splitting and input <code>SVFI</code> for processing, use <code>Y4M</code> input <code>ffmpeg</code> for compression</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> test/test.mp4 <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,format<span class="token operator">=</span>rgb24,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb24 <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span>  one_line_shot_args.exe  <span class="token parameter variable">-i</span> - <span class="token parameter variable">-c</span> Configs/SVFI_Config_pipe_test.ini <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span>  --pipe-in-fps <span class="token number">24</span> --pipe-out <span class="token operator">|</span>  ffmpeg.exe <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> test/output.mp4 <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="use-ffmpeg-for-high-precision-frame-splitting-and-input-the-svfi-pipeline-with-a-length-of-2-for-processing-output-y4m-and-use-ffmpeg-for-compression" tabindex="-1"><a class="header-anchor" href="#use-ffmpeg-for-high-precision-frame-splitting-and-input-the-svfi-pipeline-with-a-length-of-2-for-processing-output-y4m-and-use-ffmpeg-for-compression" aria-hidden="true">#</a> Use <code>ffmpeg</code> for high-precision frame splitting and input the <code>SVFI</code> pipeline with a length of 2 for processing, output <code>Y4M</code> and use <code>ffmpeg</code> for compression</h4><p>The first OLS process is used for super resolution, and the second OLS process is used for supplementary frame</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> test/test.mp4 <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,format<span class="token operator">=</span>rgb24,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb48be <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span> one_line_shot_args.exe  <span class="token parameter variable">-i</span> - <span class="token parameter variable">-c</span> Configs/SVFI_Config_pipe_1.ini <span class="token parameter variable">-t</span> pipe_1 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span> --pipe-in-fps <span class="token number">24</span> --pipe-out --pipe-rgb --pipe-in-pixfmt rgb48be <span class="token operator">|</span> one_line_shot_args.exe <span class="token parameter variable">-i</span> - <span class="token parameter variable">-c</span> Configs/SVFI_Config_pipe_2.ini <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span>  --pipe-in-fps <span class="token number">24</span> --pipe-in-pixfmt rgb48 --pipe-out <span class="token operator">|</span>  ffmpeg.exe <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> test/output.mp4 <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="use-vapoursynth-to-preprocess-the-input-and-then-use-ffmpeg-to-perform-high-precision-frame-splitting-and-svfi-pipeline-processing" tabindex="-1"><a class="header-anchor" href="#use-vapoursynth-to-preprocess-the-input-and-then-use-ffmpeg-to-perform-high-precision-frame-splitting-and-svfi-pipeline-processing" aria-hidden="true">#</a> Use <code>Vapoursynth</code> to preprocess the input and then use <code>ffmpeg</code> to perform high-precision frame splitting and <code>SVFI</code> pipeline processing</h4><p>The <code>Vapoursynth</code> script <code>input.vpy</code> used:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> vapoursynth <span class="token keyword">as</span> vs
<span class="token keyword">from</span> vapoursynth <span class="token keyword">import</span> core
video <span class="token operator">=</span> core<span class="token punctuation">.</span>lsmas<span class="token punctuation">.</span>LWLibavSource<span class="token punctuation">(</span><span class="token string">r&#39;test.mp4&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 960x540, 24fps</span>

<span class="token comment"># DO SOMETHING</span>

video<span class="token punctuation">.</span>set_output<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># output yuv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Command Line:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vspipe input.vpy <span class="token parameter variable">--y4m</span> - <span class="token operator">|</span> ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> - <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,format<span class="token operator">=</span>rgb24,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb24 <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span>  one_line_shot_args.exe  <span class="token parameter variable">-i</span> - <span class="token parameter variable">-c</span> Configs/SVFI_Config_pipe_test.ini <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span>  --pipe-in-fps <span class="token number">24</span> --pipe-out <span class="token operator">|</span>  ffmpeg.exe <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> test/output.mp4 <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tip</p><p>After using SVFI to configure task parameters and start the task, use <code>Config.ini</code> generated under the <code>Configs</code> folder to perform command line tasks</p></div>`,31);function v(b,f){const n=i("RouterLink");return p(),t("div",null,[e("div",d,[m,e("p",null,[a("The description on this page belongs to advanced content, please read "),r(n,{to:"/pages/advanced-settings/"},{default:o(()=>[a("Advanced Content Detailed Explanation")]),_:1})])]),u])}const k=s(c,[["render",v],["__file","21.Advanced CLI.html.vue"]]);export{k as default};