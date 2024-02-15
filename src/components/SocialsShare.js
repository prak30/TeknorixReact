import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const SocialsShare = ({ shareUrl }) => {
  return (
    <div className="p-4">
      <p className="text-xl font-bold mb-4">Share Job Openings</p>
      <div className="w-20 border-b-4 border-blue-500 mb-6 "></div>

      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
    </div>
  );
};

export default SocialsShare;
