import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import ScoreCard from '../../public/assets/projects/scorecardImgs.jpg';
import Chitchat from '../../public/assets/projects/chitchat_collage.jpg'
import Restaurant from '../../public/assets/projects/res_collage.jpg'
import Horbax from '../../public/assets/projects/horbax-collage.jpg'
import AI from '../../public/assets/projects/gpt3-collage.jpg'
import Nerve from '../../public/assets/projects/nerve-collage.jpeg'
import ProjectItem from './ProjectItem';

const ProjectsComponent
 = () => {
  return (
    <div id='projects' className='w-full bg-slate-100'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-2xl font-bold  tracking-widest uppercase text-[#5651e5] '>My Projects
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <ProjectItem title='Horbax' backgroundImg={Horbax} projectUrl='/horbax' />
            <ProjectItem title='Nerve' backgroundImg={Nerve} projectUrl='/nerve' />
            <ProjectItem title='Chitchat' backgroundImg={Chitchat} projectUrl='/chitchat' />
            <ProjectItem title='AI' backgroundImg={AI} projectUrl='/ai' />
            <ProjectItem title='Restaurant' backgroundImg={Restaurant} projectUrl='/restaurant' />
            <ProjectItem title='ScoreCard' backgroundImg={ScoreCard} projectUrl='/scoreCard' />
            </div>
        </div>

    </div>
  )
}

export default ProjectsComponent
