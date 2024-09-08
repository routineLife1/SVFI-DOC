import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as s,c as l,b as t,d as e,a as i,w as u,e as c}from"./app-cnjsGzXt.js";const p="/Statics/en/QuickGuide/launch.png",d="/Statics/en/QuickGuide/select-launch.png",f="/Statics/en/QuickGuide/input-a-video.png",h="/Statics/en/QuickGuide/basic-settings.png",m={},g=c('<h2 id="svfi-quick-start-guide" tabindex="-1"><a class="header-anchor" href="#svfi-quick-start-guide" aria-hidden="true">#</a> SVFI Quick Start Guide</h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The following is a basic tutorial on using SVFI to interpolate frames for a video.</p><p>The same is true for interpolating frames for image sequences. Just replace the input video with a folder containing the image sequences, and specify the input frame rate of the image sequences in the &quot;Basic Settings&quot;.</p></div><p>Welcome to use the Squirrel Video Frame Interpolation software. This software is dedicated to generate smooth high frame rate videos from jerky low frame rate videos.</p><p>Whether you have any previous experience with frame interpolation, please believe that if you follow the following process, you will have a pleasant frame interpolation experience.</p><ul><li>Confirm that your graphics card meets the minimum requirements of this software: <strong>GTX 750Ti</strong> or above, and NVIDIA graphics cards with the <strong>Maxwell</strong> architecture or above. If you do not meet this requirement, please refund in time to stop the loss and use other frame interpolation software.</li><li>Find SVFI in the Steam content library page</li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Start SVFI</li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Wait for the software to start, and you will see the following blank operation page. This is the <strong>main interface</strong> of SVFI. Please note that this tutorial is for the SVFI 6.x series, and the software version number you see may be different from the screenshot. <ul><li>To interpolate frames for a <strong>video</strong>, you first need to select the option ❶ &quot;Input video file&quot; below, and select the video to be interpolated frames in the popped up file selection window.</li><li>You can also &quot;drag&quot; the video directly into the window ❷.</li></ul></li></ul><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>SVFI only supports 8bit RGB image sequence input, and neither image sequences nor videos support transparent channel processing</p></div><ul><li><p>After inputting a video, we need to make some basic settings.</p><ul><li><p>The first thing: select the location of the interpolated frame video from the option ❶ &quot;Set output folder&quot;, that is, the <strong>output folder</strong>. If not specified, the output video of the interpolated frame will be in the <strong>folder where the input video is located</strong>.</p></li><li><p>Set the option ❷ &quot;Output file format&quot; to determine the format of the interpolated frame video as <code>.mp4</code>, <code>.mkv</code> or <code>.mov</code>. The <code>.mp4</code> file has better versatility, <code>.mkv</code> supports more types of audio, and <code>.mov</code> is less used, generally for Apple ecological editing. <strong>Please try to keep consistent with the input video. If the format of the input video is not in the above three, use mkv.</strong></p></li><li><p>You will find that the frame rate of the input video is already displayed on the left side of option ❸. You can directly select the frame rate multiple for frame interpolation in option ❸ &quot;Frame rate multiple&quot;, or manually fill in the frame rate in ❹ &quot;Output frame rate&quot;. <strong>You can fill in any number, 60 or 120</strong>, SVFI will handle everything for you.</p></li></ul></li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',13),v=t("strong",null,"Interpolate",-1),y=t("li",null,[e("Before clicking ❺ "),t("strong",null,"Interpolate"),e(", in order to prevent errors, please close any other software that may occupy the video memory.")],-1),w={href:"https://steamcommunity.com/app/1692080/discussions",target:"_blank",rel:"noopener noreferrer"};function _(b,k){const n=o("RouterLink"),a=o("ExternalLinkIcon");return s(),l("div",null,[g,t("ul",null,[t("li",null,[e("Congratulations, you have completed all the necessary settings. Now click ❺ "),v,e(" and you can go make a cup of coffee and wait for the output result in the output folder. "),t("ul",null,[y,t("li",null,[e("If the software unfortunately encounters an error, or you don't see the output video you've been thinking about in the output folder, please go to the "),i(n,{to:"/en/pages/QA/"},{default:u(()=>[e("FAQ")]),_:1}),e(" to get possible solutions;")]),t("li",null,[e("If the solution to the corresponding problem is not listed on this page, please post on the "),t("a",w,[e("Steam discussion board"),i(a)]),e(" to contact the developers for help.")])])])])])}const S=r(m,[["render",_],["__file","index.html.vue"]]);export{S as default};
