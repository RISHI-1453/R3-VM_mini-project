import React from 'react'

import { Helmet } from 'react-helmet'

import BlogPostCard2 from '../components/blog-post-card2'
import './blog.css'

const BLOG = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>BLOG - United Trim Wildcat</title>
        <meta property="og:title" content="BLOG - United Trim Wildcat" />
      </Helmet>
      <div className="blog-blog">
        <div className="blog-container1">
          <BlogPostCard2
            when="15 days ago"
            label="Co-founder of R3 VM"
            title="What is a VM and why should I use one?"
            author="RITHIN VISHWAS.A"
            image_src="/whatsapp%20image%202023-09-30%20at%2017.56.46_a8b7e1fa-1500w.jpg"
            description=" A virtual machine (VM) is a software computer that runs on a physical computer. VMs are created and managed by a hypervisor, which is a software layer that sits between the VM and the physical hardware. VMs can be used for a variety of purposes, such as running multiple operating systems on a single physical computer, isolating applications from each other, creating a sandboxed environment for running untrusted code, and scaling your IT infrastructure. The benefits of using VMs include efficiency......"
            profile_src="/whatsapp%20image%202023-09-30%20at%2017.56.46_a8b7e1fa-1500w.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard2>
        </div>
        <div className="blog-container2">
          <BlogPostCard2
            when="10 days ago"
            label="CO-FOUNDER OF R3 VM"
            title="How to get started with R3 VM"
            author="ROHITH RAJAN"
            image_src="/img_20230916_215514_628-1500w.jpg"
            description="To get started with R3 VM, you will need to create an account and choose a VM plan. Once you have created an account, you can log in to the R3 VM dashboard and deploy your first VM.  To deploy a VM, you will need to choose the VM size, operating system, and storage options. You can also configure other settings, such as networking and security. Once you have configured the VM, you can deploy it and start using it....."
            profile_src="/img_20230916_215514_628-1500w.jpg"
            rootClassName="rootClassName"
          ></BlogPostCard2>
        </div>
        <BlogPostCard2
          label="FOUNDER AND CEO OF R3 VM"
          title="How to troubleshoot VM problems"
          author="RISHI SENTHIL"
          image_src="/jvmh-1500w.png"
          description=" To troubleshoot VM problems, first identify the problem by noting its symptoms, start time, and any changes made to the VM or its environment before the problem started. Then, check the VM logs for information about the VM's activity that can help you identify the root cause of the problem. Next, check the VM's resources, such as CPU, memory, and storage, to ensure that they..."
          profile_src="/jvmh-1500w.png"
          rootClassName="rootClassName2"
        ></BlogPostCard2>
      </div>
    </div>
  )
}

export default BLOG
