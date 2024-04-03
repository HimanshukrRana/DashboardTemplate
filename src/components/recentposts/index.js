import React from 'react'

const style = {
    flex_center: "flex justify-center"
}
function RecentPosts() {
    return (
        <div className="bg-[#1A1E1C] w-[550px] rounded-md">
            <div>
                <div className="p-2 border-b border-[#88898a] flex justify-center">
                    <h6 className="text-white">In Recent posts</h6>
                </div>
                <div className='p-4 flex justify-center  rounded-md'>
                    {/* <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials" height="280" width="320px" className=' rounded-xl'></iframe> */}
                    {/* <iframe border='0' frameborder='0' height="280" width="320px" className=' rounded-xl' src="https://twitframe.com/show?url=https://x.com/elonmusk/status/1604617643973124097?s=20"></iframe> */}
                    <blockquote height="220" width="320px" className='twitter-tweet rounded-xl'><p lang="en" dir="ltr">Should I step down as head of Twitter? I will abide by the results of this poll.</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1604617643973124097?ref_src=twsrc%5Etfw">December 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
                <div className='p-2 flex justify-center border-t border-[#88898a]'>
                    <button className="p-1 bg-[#1B9A59] text-white rounded-sm">
                        Follow on X
                    </button>
                </div>

            </div>
        </div >
    )
}

export default RecentPosts