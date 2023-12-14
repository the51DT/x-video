import React, {useState, useEffect, useRef } from 'react'

import MyBtn from '../../components/Button.tsx'
// import IconBtn from '../../components/IconBtn.tsx' 추후 slot 개념 이해 후 처리
import Loading from '../../components/Loading.tsx'
import Modal from '../../components/Modal.tsx'

// import Swiper core and required modules
import { Mousewheel } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import VideoData from './videoList.js'

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }    
}

const ShortVideo = () => {
    const [loading, setLoading] = useState(false) 
    const [videoList ,setVideoList]=useState(VideoData)

    const [isActive, setActive] = useState(false)   
    const [isPlay, setPlay] = useState(false)   
    const [isPlaying, setIsPlaying] = useState(false)
    const [isHeart, setIsHeart] = useState(false)

    const [modalOpen, setModalOpen] = useState(false)
    const [mypageOpen, setMypageOpen] = useState(false)
    const [shareOpen, setShareOpen] = useState(false)
    const [commandOpen, setCommandOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const [activeLikes, setActiveLikes] = useState(false)
    
    const timer = useRef(null)
    const db_star = useRef(null)

    // shuffle(videoList)

    // 홈
    const goHome = () => {   
        setLoading(true)         
        setTimeout (() => {
            setLoading(false)
            alert('새로운 비디오가 없습니다.')
            window.location.reload()
        },500)    
    }
    // 비디오 재생
    const videoTogggle = (video, index) => {   
        setIsPlaying(!isPlaying)
        const videoElement = document.querySelectorAll('video')[index];
        // 추후 ref로 변경 에정        
        if (videoElement.paused) {
          videoElement.play();        
        } else {
          videoElement.pause();        
        }
    }
    
    const handleInterface = (event, index) => {      
      setIsPlaying(!isPlaying)
      const videoElement = document.querySelectorAll('video')[index];
      // 추후 ref로 변경 에정        
      if (videoElement.paused) {
        videoElement.play();        
      } else {
        videoElement.pause();        
      }      
    }
    const handleDoubleClick = (event, video) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        clearTimeout(timer.current);
        console.log("싱글")
        db_star.current = 0;
      }, 300)
      if (db_star.current === 0) {
        db_star.current = new Date().getTime();
      } else {
        let now = new Date().getTime();
        let del = now - db_star.current;
        if (del <= 300) {
          console.log("더블")
          clearTimeout(timer.current);     
          videoLikeBtn(video)  
          setIsHeart(!isHeart)     
        }
        db_star.current = 0;
      }  
    //   setIsHeart(!isHeart)  
    //   videoLikeBtn(video)   
    }
    // 좋아요 버튼
    const videoLikeBtn = ( video) => {        
      setActiveLikes(prevActiveLikes => ({
          ...prevActiveLikes,
          [video.id]: !prevActiveLikes[video.id]
      }))      
      setVideoList(prevVideoList => {
          return prevVideoList.map(prevVideo => {
              if (prevVideo.id === video.id) {
                  return {
                      ...prevVideo,
                      statistics: {
                          ...prevVideo.statistics,
                          like_count: prevVideo.statistics.like_count + 1
                      }
                  }
              }
              return prevVideo
          })
      })
    }

    //영상 업로드
    const VideoUpLoad = () => {
        setModalOpen(true)
    }
    // 마이페이지
    const MyPageOpen = () => {
        setMypageOpen(true)
    }

    // 공유하기
    const videoShareBtn = () => {
        setShareOpen(true)
    }

    // 댓글
    const commandBtn = () => {
        setCommandOpen(true)
    } 
    // 검색
    const goSearch = () => {
        setSearchOpen(true)
    }

    return (
        <div className="tiktok__wrap">
            <div className="tiktok__wrap--inner">
                <div className='top__utils'>
                    <MyBtn children={"추천영상"} btnColor={ "btn-default-text" } sizeStyle={ "small" } onClick={ goHome } />
                    <MyBtn children={"검색"}  btnColor={ "btn-default-text" } sizeStyle={ "small" } onClick={ goSearch } />                    
                </div>
                {loading ? <Loading /> : null}
                <Swiper
                    // install Swiper modules
                    direction={'vertical'}
                    modules={[ Mousewheel ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >          
                    {
                        videoList.map((video, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="video__wrap"
                                    onClick={ () => handleDoubleClick(event, video)}
                                >
                                    {/* 화면 터치 시 하트  */}
                                    <div className={isHeart ? "screen-heart is-active" : "screen-heart"}>
                                        <div className="heart__wrap">
                                            <div className="left"></div>
                                            <div className="right"></div>
                                        </div>                             
                                    </div>
                                    {/* 재생 정지  */}   
                                    <MyBtn 
                                        children={""}                                        
                                        active={isPlaying ? "is_playing" : ""} 
                                        btnColor={"icon_play_video"}
                                        sizeStyle={ "iconOnly" }  
                                        onClick={ () => videoTogggle(video, index) } 
                                    />                                                               
                                    {/* //좋아요, 등 메뉴 */}
                                    <ul className="user-action">
                                        <li>
                                            <button type='button'
                                                onClick={ () => videoLikeBtn(video, index) }
                                            >
                                                <div>
                                                    <svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1">
                                                    <g id="surface1">
                                                        <path className={ activeLikes ? 'basic-color active-color': 'basic-color' } d="M 36.015625 1.5625 C 31.09375 1.5625 26.953125 4.375 25 8.4375 C 23.046875 4.375 18.90625 1.5625 13.984375 1.5625 C 7.1875 1.5625 1.5625 7.34375 1.5625 13.984375 C 1.5625 25.3125 25 48.4375 25 48.4375 C 25 48.4375 48.4375 25.3125 48.4375 13.984375 C 48.4375 7.34375 42.8125 1.5625 36.015625 1.5625 Z M 36.015625 1.5625 "/>
                                                    </g>
                                                    </svg>
                                                </div>
                                               <div>{ video.statistics.like_count }</div> 
                                            </button>                                            
                                        </li>
                                        <li>
                                            <button type='button'
                                                onClick={ () => commandBtn(video, index) }
                                            >
                                               <div>
                                               <svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1">
                                                <g id="surface1">
                                                <path className="basic-color" d="M 8.332031 2.082031 C 4.882812 2.082031 2.082031 4.882812 2.082031 8.332031 L 2.082031 31.25 C 2.082031 34.703125 4.882812 37.5 8.332031 37.5 L 12.5 37.5 L 12.5 45.832031 C 12.5 46.640625 12.96875 47.378906 13.699219 47.71875 C 14.433594 48.0625 15.296875 47.953125 15.917969 47.433594 L 27.835938 37.5 L 41.667969 37.5 C 45.117188 37.5 47.917969 34.703125 47.917969 31.25 L 47.917969 8.332031 C 47.917969 4.882812 45.117188 2.082031 41.667969 2.082031 Z M 8.332031 2.082031 "/>
                                                </g>
                                                </svg>
                                               </div>
                                               <div>{ video.statistics.comment_count }</div> 
                                            </button>                                            
                                        </li>
                                        <li>
                                            <button type='button'
                                                onClick={ () => videoShareBtn(video, index) }
                                            >
                                               <div>
                                               <svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1">
                                                <g id="surface1">
                                                <path className="basic-color" d="M 41.671875 33.328125 C 38.828125 33.328125 36.320312 34.765625 34.8125 36.933594 L 16.347656 27.160156 C 16.53125 26.464844 16.671875 25.753906 16.671875 25 C 16.671875 24.25 16.542969 23.535156 16.347656 22.84375 L 34.8125 13.066406 C 36.320312 15.246094 38.820312 16.671875 41.671875 16.671875 C 46.269531 16.671875 50 12.9375 50 8.339844 C 50 3.742188 46.269531 0 41.671875 0 C 37.070312 0 33.339844 3.730469 33.339844 8.328125 C 33.339844 8.40625 33.359375 8.484375 33.359375 8.5625 L 13.925781 18.859375 C 12.441406 17.507812 10.496094 16.671875 8.339844 16.671875 C 3.730469 16.671875 0 20.398438 0 25 C 0 29.601562 3.730469 33.328125 8.328125 33.328125 C 10.488281 33.328125 12.429688 32.492188 13.914062 31.144531 L 33.351562 41.4375 C 33.351562 41.515625 33.328125 41.59375 33.328125 41.671875 C 33.328125 46.269531 37.0625 50 41.660156 50 C 46.261719 50 49.992188 46.269531 49.992188 41.671875 C 49.992188 37.070312 46.269531 33.328125 41.671875 33.328125 Z M 41.671875 33.328125 "/>
                                                </g>
                                                </svg>
                                               </div>
                                               <div>{ video.statistics.share_count }</div> 
                                            </button>                                            
                                        </li>                    
                                    </ul>
                                    {/* 비디오 */}
                                    <div className="video-info">
                                        <p className="tit">{ video.title }</p>
                                        <p className="description">
                                            <strong>{ video.nickName }</strong> |  { video.statistics.play_count }
                                        </p>
                                    </div>
                                    <video                         
                                        muted
                                        onClick={ () => handleInterface(event, index) }                                                                  
                                    >
                                        <source src={ video.url } type="video/mp4" />
                                    </video>                                                            
                                </div>
                            </SwiperSlide>
                        )
                        })
                    }               
  
                </Swiper>    
                {/* 글로벌 유틸 메뉴 */}
                <div className="bottom-util">
                    <MyBtn children={"홈"} btnColor={ "btn-default-text" } sizeStyle={ "small" } onClick={ goHome } />
                    <MyBtn children={"업로드"}  btnColor={ "btn-default-text" } sizeStyle={ "small" } onClick={ VideoUpLoad } />
                    <MyBtn children={"마이페이지"}  btnColor={ "btn-default-text" } sizeStyle={ "small" } onClick={ MyPageOpen } />                    
                </div>       
                <Modal 
                    open={modalOpen}
                    title={ "업로드" }
                    onCancel={e => setModalOpen(false)}
                    width={ "100%" }
                    height={ "50%"}
                    bottom={"0"}                  
                  
                >
                    영상 업로드
                </Modal>    
                <Modal 
                    open={mypageOpen}
                    title={ "마이 페이지" }
                    onCancel={e => setMypageOpen(false)}
                    width={ "100%" }
                    height={ "100%"}
                    bottom={"0"}                  
                  
                >
                    마이 페이지
                </Modal>  
                <Modal 
                    open={shareOpen}
                    title={ "공유하기" }
                    onCancel={e => setShareOpen(false)}
                    width={ "100%" }
                    height={ "50%"}
                    bottom={"0"}                  
                  
                >
                   공유하기
                </Modal>     
                <Modal 
                    open={commandOpen}
                    title={ "댓글" }
                    onCancel={e => setCommandOpen(false)}
                    width={ "100%" }
                    height={ "100%"}
                    bottom={"0"}                  
                  
                >
                   댓글
                </Modal> 
                <Modal 
                    open={searchOpen}
                    title={ "검색" }
                    onCancel={e => setSearchOpen(false)}
                    width={ "100%" }
                    height={ "100%"}
                    bottom={"0"}                  
                  
                >
                   검색
                </Modal>                                                                              
            </div>            
        </div>
    );
};

export default ShortVideo;