const l=JSON.parse('{"key":"v-52db2d08","path":"/pages/052617/","title":"高级内容详解","lang":"zh-CN","frontmatter":{"title":"高级内容详解","date":"2023-05-10T18:58:00.000Z","permalink":"/pages/052617/","description":"以下内容将为您介绍软件高级设置部分 工作状态恢复 自动寻找进度当遇到任务中途断电或者其他以外情况终止任务导致程序退出的情况，可以通过点击 “自动寻找进度”来恢复上次的区块位置。 点击此按钮前请您先点击要恢复进度的任务条目。随后点击“一键补帧”，软件将弹窗向您确认补帧起始位置。 起始补帧时刻和结束补帧时刻 可以选择需要补帧的时间段 输入格式: 小时:分钟...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/pages/052617/"}],["meta",{"property":"og:site_name","content":"SVFI Doc"}],["meta",{"property":"og:title","content":"高级内容详解"}],["meta",{"property":"og:description","content":"以下内容将为您介绍软件高级设置部分 工作状态恢复 自动寻找进度当遇到任务中途断电或者其他以外情况终止任务导致程序退出的情况，可以通过点击 “自动寻找进度”来恢复上次的区块位置。 点击此按钮前请您先点击要恢复进度的任务条目。随后点击“一键补帧”，软件将弹窗向您确认补帧起始位置。 起始补帧时刻和结束补帧时刻 可以选择需要补帧的时间段 输入格式: 小时:分钟..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-15T11:02:44.000Z"}],["meta",{"property":"article:author","content":"Justin62628"}],["meta",{"property":"article:published_time","content":"2023-05-10T18:58:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-15T11:02:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高级内容详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-10T18:58:00.000Z\\",\\"dateModified\\":\\"2023-07-15T11:02:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Justin62628\\",\\"url\\":\\"https://github.com/Justin62628\\"}]}"]]},"headers":[{"level":2,"title":"工作状态恢复","slug":"工作状态恢复","link":"#工作状态恢复","children":[{"level":3,"title":"自动寻找进度","slug":"自动寻找进度","link":"#自动寻找进度","children":[]},{"level":3,"title":"起始补帧时刻和结束补帧时刻","slug":"起始补帧时刻和结束补帧时刻","link":"#起始补帧时刻和结束补帧时刻","children":[]},{"level":3,"title":"起始区块计数和起始输入帧数","slug":"起始区块计数和起始输入帧数","link":"#起始区块计数和起始输入帧数","children":[]},{"level":3,"title":"复原至原点","slug":"复原至原点","link":"#复原至原点","children":[]},{"level":3,"title":"风险模式","slug":"风险模式","link":"#风险模式","children":[]}]},{"level":2,"title":"转场识别","slug":"转场识别","link":"#转场识别","children":[{"level":3,"title":"开启转场识别","slug":"开启转场识别","link":"#开启转场识别","children":[]},{"level":3,"title":"最大识别阈值 (默认不用调整)","slug":"最大识别阈值-默认不用调整","link":"#最大识别阈值-默认不用调整","children":[]},{"level":3,"title":"使用固定转场识别","slug":"使用固定转场识别","link":"#使用固定转场识别","children":[]},{"level":3,"title":"转场使用帧混合","slug":"转场使用帧混合","link":"#转场使用帧混合","children":[]},{"level":3,"title":"输出转场帧","slug":"输出转场帧","link":"#输出转场帧","children":[]}]},{"level":2,"title":"输出分辨率设置","slug":"输出分辨率设置","link":"#输出分辨率设置","children":[{"level":3,"title":"输出文件分辨率","slug":"输出文件分辨率","link":"#输出文件分辨率","children":[]},{"level":3,"title":"输出黑边长度","slug":"输出黑边长度","link":"#输出黑边长度","children":[]},{"level":3,"title":"处理后补全黑边","slug":"处理后补全黑边","link":"#处理后补全黑边","children":[]}]},{"level":2,"title":"使用AI超分","slug":"使用ai超分","link":"#使用ai超分","children":[]},{"level":2,"title":"对超分模型的介绍","slug":"对超分模型的介绍","link":"#对超分模型的介绍","children":[{"level":3,"title":"realCUGAN","slug":"realcugan","link":"#realcugan","children":[]},{"level":3,"title":"ncnnCUGAN","slug":"ncnncugan","link":"#ncnncugan","children":[]},{"level":3,"title":"waifuCuda","slug":"waifucuda","link":"#waifucuda","children":[]},{"level":3,"title":"realESR","slug":"realesr","link":"#realesr","children":[]},{"level":3,"title":"ncnnRealESR","slug":"ncnnrealesr","link":"#ncnnrealesr","children":[]},{"level":3,"title":"AnimeSR (由Tencent ARC Lab开发的动漫超分算法)","slug":"animesr-由tencent-arc-lab开发的动漫超分算法","link":"#animesr-由tencent-arc-lab开发的动漫超分算法","children":[]},{"level":3,"title":"NvidiaSR (由NVIDIA开发的超高速超分算法)","slug":"nvidiasr-由nvidia开发的超高速超分算法","link":"#nvidiasr-由nvidia开发的超高速超分算法","children":[]},{"level":3,"title":"BasicVSRPlusPlus (实拍超分算法,效果依赖超分序列长度)","slug":"basicvsrplusplus-实拍超分算法-效果依赖超分序列长度","link":"#basicvsrplusplus-实拍超分算法-效果依赖超分序列长度","children":[]},{"level":3,"title":"BasicVSRPlusPlusRestore (实拍超分算法,效果依赖超分序列长度)","slug":"basicvsrplusplusrestore-实拍超分算法-效果依赖超分序列长度","link":"#basicvsrplusplusrestore-实拍超分算法-效果依赖超分序列长度","children":[]},{"level":3,"title":"PureBasicVSR (实拍超分算法,效果依赖超分序列长度)","slug":"purebasicvsr-实拍超分算法-效果依赖超分序列长度","link":"#purebasicvsr-实拍超分算法-效果依赖超分序列长度","children":[]},{"level":3,"title":"RealBasicVSR (实拍超分算法,效果依赖超分序列长度)","slug":"realbasicvsr-实拍超分算法-效果依赖超分序列长度","link":"#realbasicvsr-实拍超分算法-效果依赖超分序列长度","children":[]},{"level":3,"title":"FTVSR (实拍超分算法,效果依赖超分序列长度)","slug":"ftvsr-实拍超分算法-效果依赖超分序列长度","link":"#ftvsr-实拍超分算法-效果依赖超分序列长度","children":[]},{"level":3,"title":"Anime4K (超高速实时动漫超分算法, 较保守)","slug":"anime4k-超高速实时动漫超分算法-较保守","link":"#anime4k-超高速实时动漫超分算法-较保守","children":[]},{"level":3,"title":"waifu2x (经典保守超分算法)","slug":"waifu2x-经典保守超分算法","link":"#waifu2x-经典保守超分算法","children":[]},{"level":3,"title":"TensorRT (对以上部分超分算法的超快加速)","slug":"tensorrt-对以上部分超分算法的超快加速","link":"#tensorrt-对以上部分超分算法的超快加速","children":[]},{"level":3,"title":"负载显卡","slug":"负载显卡","link":"#负载显卡","children":[]},{"level":3,"title":"超分算法","slug":"超分算法","link":"#超分算法","children":[]},{"level":3,"title":"超分模型倍数","slug":"超分模型倍数","link":"#超分模型倍数","children":[]},{"level":3,"title":"转移分辨率比","slug":"转移分辨率比","link":"#转移分辨率比","children":[]},{"level":3,"title":"RealCUGAN切割模式","slug":"realcugan切割模式","link":"#realcugan切割模式","children":[]},{"level":3,"title":"RealCUGAN低显存模式","slug":"realcugan低显存模式","link":"#realcugan低显存模式","children":[]},{"level":3,"title":"切割块大小(使用realCUGAN时不建议开启)","slug":"切割块大小-使用realcugan时不建议开启","link":"#切割块大小-使用realcugan时不建议开启","children":[]},{"level":3,"title":"超分序列长度","slug":"超分序列长度","link":"#超分序列长度","children":[]},{"level":3,"title":"超分使用半精度","slug":"超分使用半精度","link":"#超分使用半精度","children":[]},{"level":3,"title":"TTA","slug":"tta","link":"#tta","children":[]},{"level":3,"title":"FMNet - HDR10","slug":"fmnet-hdr10","link":"#fmnet-hdr10","children":[]}]},{"level":2,"title":"输出设置（压制参数质量）","slug":"输出设置-压制参数质量","link":"#输出设置-压制参数质量","children":[{"level":3,"title":"渲染质量CRF","slug":"渲染质量crf","link":"#渲染质量crf","children":[]},{"level":3,"title":"目标码率","slug":"目标码率","link":"#目标码率","children":[]},{"level":3,"title":"编码器","slug":"编码器","link":"#编码器","children":[]},{"level":3,"title":"选择压制编码","slug":"选择压制编码","link":"#选择压制编码","children":[]},{"level":3,"title":"选择压制预设","slug":"选择压制预设","link":"#选择压制预设","children":[]},{"level":3,"title":"N卡硬编预设","slug":"n卡硬编预设","link":"#n卡硬编预设","children":[]},{"level":3,"title":"默认压制方案","slug":"默认压制方案","link":"#默认压制方案","children":[]},{"level":3,"title":"音频二压为AAC","slug":"音频二压为aac","link":"#音频二压为aac","children":[]},{"level":3,"title":"HDR严格模式","slug":"hdr严格模式","link":"#hdr严格模式","children":[]},{"level":3,"title":"DV兼容HDR10","slug":"dv兼容hdr10","link":"#dv兼容hdr10","children":[]},{"level":3,"title":"一键HDR: 将SDR视频转换为HDR10+","slug":"一键hdr-将sdr视频转换为hdr10","link":"#一键hdr-将sdr视频转换为hdr10","children":[]}]},{"level":2,"title":"解码质量控制","slug":"解码质量控制","link":"#解码质量控制","children":[{"level":3,"title":"使用vspipe前置解码","slug":"使用vspipe前置解码","link":"#使用vspipe前置解码","children":[]},{"level":3,"title":"硬件解码","slug":"硬件解码","link":"#硬件解码","children":[]},{"level":3,"title":"快速拆帧","slug":"快速拆帧","link":"#快速拆帧","children":[]},{"level":3,"title":"高精度优化工作流","slug":"高精度优化工作流","link":"#高精度优化工作流","children":[]},{"level":3,"title":"开启反交错","slug":"开启反交错","link":"#开启反交错","children":[]},{"level":3,"title":"DePan (去色带)","slug":"depan-去色带","link":"#depan-去色带","children":[]},{"level":3,"title":"快速降噪","slug":"快速降噪","link":"#快速降噪","children":[]},{"level":3,"title":"快速添噪","slug":"快速添噪","link":"#快速添噪","children":[]},{"level":3,"title":"自定义拆帧参数 (专业选项)","slug":"自定义拆帧参数-专业选项","link":"#自定义拆帧参数-专业选项","children":[]}]},{"level":2,"title":"自定义编码设置","slug":"自定义编码设置","link":"#自定义编码设置","children":[{"level":3,"title":"指定编码线程数","slug":"指定编码线程数","link":"#指定编码线程数","children":[]},{"level":3,"title":"自定义压制参数","slug":"自定义压制参数","link":"#自定义压制参数","children":[]},{"level":3,"title":"时间重映射: 改变视频的速度","slug":"时间重映射-改变视频的速度","link":"#时间重映射-改变视频的速度","children":[]},{"level":3,"title":"首尾循环","slug":"首尾循环","link":"#首尾循环","children":[]}]},{"level":2,"title":"IO控制","slug":"io控制","link":"#io控制","children":[{"level":3,"title":"手动指定缓冲区内存大小","slug":"手动指定缓冲区内存大小","link":"#手动指定缓冲区内存大小","children":[]},{"level":3,"title":"单一输出区块大小","slug":"单一输出区块大小","link":"#单一输出区块大小","children":[]},{"level":3,"title":"任务完成后保留项目文件夹","slug":"任务完成后保留项目文件夹","link":"#任务完成后保留项目文件夹","children":[]}]},{"level":2,"title":"补帧设置","slug":"补帧设置","link":"#补帧设置","children":[{"level":3,"title":"安全帧率","slug":"安全帧率","link":"#安全帧率","children":[]},{"level":3,"title":"反向光流","slug":"反向光流","link":"#反向光流","children":[]},{"level":3,"title":"绝对流畅","slug":"绝对流畅","link":"#绝对流畅","children":[]},{"level":3,"title":"光流尺度","slug":"光流尺度","link":"#光流尺度","children":[]},{"level":3,"title":"交错补帧","slug":"交错补帧","link":"#交错补帧","children":[]},{"level":3,"title":"视频流畅度优化","slug":"视频流畅度优化","link":"#视频流畅度优化","children":[]},{"level":3,"title":"负载显卡","slug":"负载显卡-1","link":"#负载显卡-1","children":[]},{"level":3,"title":"补帧算法","slug":"补帧算法","link":"#补帧算法","children":[]},{"level":3,"title":"补帧模型","slug":"补帧模型","link":"#补帧模型","children":[]},{"level":3,"title":"TTA模式","slug":"tta模式","link":"#tta模式","children":[]},{"level":3,"title":"输出层微调模式 (仅实验性模型可使用)","slug":"输出层微调模式-仅实验性模型可使用","link":"#输出层微调模式-仅实验性模型可使用","children":[]},{"level":3,"title":"双向光流","slug":"双向光流","link":"#双向光流","children":[]},{"level":3,"title":"动态光流尺度","slug":"动态光流尺度","link":"#动态光流尺度","children":[]}]},{"level":2,"title":"自定义预设栏","slug":"自定义预设栏","link":"#自定义预设栏","children":[{"level":3,"title":"基于当前设置新建预设","slug":"基于当前设置新建预设","link":"#基于当前设置新建预设","children":[]},{"level":3,"title":"移除当前预设","slug":"移除当前预设","link":"#移除当前预设","children":[]},{"level":3,"title":"应用指定预设","slug":"应用指定预设","link":"#应用指定预设","children":[]}]},{"level":2,"title":"工具箱","slug":"工具箱","link":"#工具箱","children":[{"level":3,"title":"视频转换 GIF 动图","slug":"视频转换-gif-动图","link":"#视频转换-gif-动图","children":[]},{"level":3,"title":"循环动图","slug":"循环动图","link":"#循环动图","children":[]},{"level":3,"title":"合并已有区块","slug":"合并已有区块","link":"#合并已有区块","children":[]},{"level":3,"title":"音视频合并","slug":"音视频合并","link":"#音视频合并","children":[]},{"level":3,"title":"导出当前设置到文本文档","slug":"导出当前设置到文本文档","link":"#导出当前设置到文本文档","children":[]},{"level":3,"title":"Debug","slug":"debug","link":"#debug","children":[]}]},{"level":2,"title":"偏好设置","slug":"偏好设置","link":"#偏好设置","children":[{"level":3,"title":"多任务休息间隔","slug":"多任务休息间隔","link":"#多任务休息间隔","children":[]},{"level":3,"title":"选择缓存文件夹","slug":"选择缓存文件夹","link":"#选择缓存文件夹","children":[]},{"level":3,"title":"补帧任务完成后","slug":"补帧任务完成后","link":"#补帧任务完成后","children":[]},{"level":3,"title":"不可用功能","slug":"不可用功能","link":"#不可用功能","children":[]},{"level":3,"title":"开启专家模式","slug":"开启专家模式","link":"#开启专家模式","children":[]},{"level":3,"title":"开启任务前参数文本预览","slug":"开启任务前参数文本预览","link":"#开启任务前参数文本预览","children":[]},{"level":3,"title":"任务完成后清空任务列表","slug":"任务完成后清空任务列表","link":"#任务完成后清空任务列表","children":[]},{"level":3,"title":"使用全局设置","slug":"使用全局设置","link":"#使用全局设置","children":[]},{"level":3,"title":"鲁莽的退出","slug":"鲁莽的退出","link":"#鲁莽的退出","children":[]},{"level":3,"title":"原味压制模式","slug":"原味压制模式","link":"#原味压制模式","children":[]},{"level":3,"title":"开启预览","slug":"开启预览","link":"#开启预览","children":[]},{"level":3,"title":"自动纠错","slug":"自动纠错","link":"#自动纠错","children":[]},{"level":3,"title":"开启安静模式","slug":"开启安静模式","link":"#开启安静模式","children":[]}]}],"git":{"createdTime":1689418964000,"updatedTime":1689418964000,"contributors":[{"name":"DAMNCRAB","email":"enormouscrab@gmail.com","commits":1}]},"readingTime":{"minutes":23.01,"words":6903},"filePathRelative":"20.指南/20.高级内容详解.md","localizedDate":"2023年5月10日","autoDesc":true,"excerpt":""}');export{l as data};