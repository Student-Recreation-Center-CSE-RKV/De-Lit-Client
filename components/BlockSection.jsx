"use client";
import { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import Block from '@/components/Block';

const data = [
{
    "id": 0,
    "image": "/mag.jpg",
    "title": "MAGAZINES",
    "description": "We call ourselves 'dreamers and doers' for a reason: we can make happen not just what is possible, but what is impossible. NEOM is a unique investment opportunity, unrivalled anywhere else."
},
{
    "id": 1,
    "image": "https://images.unsplash.com/photo-1528359645462-5ff224bf906e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "BLOGS",
    "description": "Pandas are large, peaceful bears native to the mountainous forests of China, known for their distinctive black-and-white fur. They primarily eat bamboo, which makes up over 99% of their diet, though they occasionally eat other plants and small animals. Pandas are solitary animals and spend most of their time eating and resting."
},
{
    "id": 2,
    "image": "https://plus.unsplash.com/premium_photo-1664303314018-d59cbbb5b13d?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "GALLERY",
    "description": "I am ChatGPT, an AI language model created by OpenAI, designed to assist with a wide range of tasks, including answering questions, generating text, solving problems, and even engaging in creative writing"
},
{
    "id": 3,
    "image": "https://images.unsplash.com/photo-1607396508599-5d61627a058f?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "CLUB\u00A0TALK",
    "description": "Most birds can fly, which distinguishes them from almost all other vertebrate classes. Flight is the primary means of locomotion for most bird species and is used for searching for food and for escaping from predators. Birds have various adaptations for flight, including a lightweight skeleton, two large flight muscles, the pectoralis and the supracoracoideus, as well as a modified forelimb"
}];

const n = data.length;

export default function BlockSection() {
    const targetRef = useRef(null);
    const [activeBlock, setActiveBlock] = useState(0);
    const {scrollYProgress} = useScroll({target: targetRef, offset: ["start start", "end end"]});
    useMotionValueEvent(scrollYProgress, "change", (latest) => setActiveBlock(Math.floor(latest * n)));
    return (
      <>
        {/* <motion.p className="fixed text-red-500 left-2 top-[17vh]">{scrollYProgress}</motion.p> */}
        <motion.div ref={targetRef} style={{height: `${(n + 1) * 100}vh`}}>
        {data.map((block, idx) => <Block key={block.id} {...block} isActive={activeBlock === idx || (activeBlock === n && idx === n - 1)} />)}
        </motion.div>
      </>
    )
  }