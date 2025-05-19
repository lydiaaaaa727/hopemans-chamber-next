import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handlePost = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Hopeman's Chamber</h1>
        <nav className="space-x-4">
          <a href="#characters" className="hover:underline">角色介绍</a>
          <a href="#timeline" className="hover:underline">时间线</a>
          <a href="#paro" className="hover:underline">Paro宇宙</a>
          <a href="#messages" className="hover:underline">留言板</a>
        </nav>
      </header>

      <main className="px-6 py-8">
        <div className="grid grid-cols-2 gap-4 mb-12">
          <img src="/hopemans_chamber_assets/image_1.jpg" className="rounded-lg shadow" />
          <img src="/hopemans_chamber_assets/image_2.jpg" className="rounded-lg shadow" />
        </div>

        <section id="characters" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">角色介绍</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded">
              <img src="/hopemans_chamber_assets/image_3.jpg" className="w-full rounded mb-2" />
              <h3 className="text-xl font-semibold">文申侠</h3>
              <p className="text-gray-300 mt-2 text-sm">36岁盲人大律师，气质清冷，穿黑白西装，拥有超强四感。外冷内热，智商超高，坚毅果敢，是弱者的守护者。</p>
            </div>
            <div className="bg-purple-900 p-4 rounded">
              <img src="/hopemans_chamber_assets/image_4.jpg" className="w-full rounded mb-2" />
              <h3 className="text-xl font-semibold">黎绮薇</h3>
              <p className="text-gray-200 mt-2 text-sm">29岁，文申侠律所助理。外表冷艳高贵，私下高智纯情，热爱Hello Kitty，拥有黑帮千金背景，情感细腻而执着。</p>
            </div>
          </div>
        </section>

        <section id="timeline" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">剧情发展时间线</h2>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>● 相识：黎绮薇作为法律助理进入律所，与文申侠初识。</li>
            <li>● 共事：多次案件合作中，逐渐了解彼此，关系从互怼转向默契拍档。</li>
            <li>● 情愫暗生：黎绮薇暗恋逐渐加深，文申侠开始感受到她的存在对他的重要性。</li>
            <li>● 暧昧升级：案件危机中互相扶持，黎绮薇的情绪几乎崩溃，文申侠第一次紧紧抱她。</li>
          </ul>
        </section>

        <section id="paro" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Paro宇宙集锦</h2>
          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <h3 className="text-lg font-bold mt-4">ABO世界观</h3>
              <img src="/hopemans_chamber_assets/image_5.jpg" className="rounded mt-2" />
              <p className="mt-2">在这个世界，文申侠是年下Omega，而黎绮薇是隐性Alpha……他们在一次意外中信息素共鸣。</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mt-4">校园Paro</h3>
              <p>黎绮薇是风云校花，文申侠是清冷盲眼天才学神，因补习而结缘。</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mt-4">宗教设定</h3>
              <p>文申侠是身着神袍的盲人神父，黎绮薇是黑帮出身的忏悔者。禁欲与欲望交缠之地，是信仰，也是命运。</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mt-4">娱乐圈篇</h3>
              <p>冷面影帝文申侠与性感新人黎绮薇，在综艺节目中从争锋到互撩，全网嗑疯。</p>
            </div>
          </div>
        </section>

        <section id="messages" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">留言板</h2>
          <div className="space-y-2">
            <textarea
              placeholder="留下你对绮侠CP的一句话..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-24 p-2 text-black rounded"
            />
            <button onClick={handlePost} className="bg-white text-black px-4 py-1 rounded">发送</button>
            <div className="mt-4 space-y-2">
              {messages.map((msg, idx) => (
                <div key={idx} className="bg-gray-800 p-2 rounded text-sm text-gray-200">
                  {msg}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
