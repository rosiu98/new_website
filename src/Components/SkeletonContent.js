import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonContent = ({ cards }) => {
  return Array(cards).fill(0).map((card, i) => (
    <div key={i} className='project_container'>
    <div className='project_image' style={{border: '0' , display: 'block'}}>
      <Skeleton width={'100%'} height={'100%'} style={{display: 'block'}} />
    </div>
    <div className='project_title'>
    <Skeleton width={'50%'} height={'100%'} />
    </div>
    <div className='project_copy' >
    <Skeleton count={2} width={'100%'} height={'100%'} />
    </div>
    <Skeleton width={'20%'} height={'20px'} />

    <div className='project_column_info'>
        <span className="project_column_info_icon">
        <Skeleton  width={'120px'} height={'20px'} />
        </span>
        <span className="project_column_info_icon">
        <Skeleton width={'120px'} height={'20px'} />
        </span>
    </div>
</div>
  ))
}

export default SkeletonContent