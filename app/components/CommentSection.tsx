
"use client";

import React, { useState } from "react";
interface CommentSectionProps{
  postId:string;
}

const CommentSection =({postId}: CommentSectionProps) =>{
const [Comments,setComments] =useState<string[]>([]);
 const [newComment,setNewComment] = useState("");
const handleCommentChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setNewComment(e.target.value);
};
 const handleAddComment =() =>{
if (newComment.trim()){
console.log(`Adding comment to post ${postId}: ${newComment}`);
setComments((prev) => [...prev,newComment]);
setNewComment("");
    
     
}
 };
return (
<div className="space-y-4 mt-6">
<h3 className="text-xl font-semibold">Comments</h3>
<div className="space-y-2">
 {Comments.map((comment, index)=>(

<p key={index} className="bg-gray-100 p-2 rounded-md shadow-sm">{comment}</p>

))}
  
   </div>
      <div className="flex space-x-2">
       <input
       type="text"
        value={newComment}
     onChange={handleCommentChange}
     placeholder="Add a comment..."
       className="p-2 border rounded-md w-full"  
         />
        <button
        onClick={handleAddComment}
      className="bg-blue-500 text-white p-2 rounded-md"
        >
        Post Comment
         </button>
       </div>
    </div>
 );
};
 export default CommentSection;


