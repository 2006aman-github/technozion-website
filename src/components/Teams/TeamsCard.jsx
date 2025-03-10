import React from "react";
import "./TeamsCard.css";
import { Link } from "react-router-dom";
import branch from "./rsz_1rsz_cherry_branch.png"

const TeamsCard = ({
	teamName,
	position,
	photo,
	link,
	members,
	email,
	phoneNum,
	imporatance,
	teamType
}) => {
	return (
		<div className={`boxx sm:w-1/1 md:w-1/2 lg:w-1/3 sm:p-4 xsm:py-4 text-black hover:text-tzblue game-container 
		${imporatance === 'Yes' ? 'max-w-[30%]' : 'max-w-[20%]'}`}>
			<img className="decor" src={branch} alt="cherry branch" />
			<Link to={link} state={{ name: teamName, members: members }}>
				<div className="item h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white  border-none hover:border-stone-50 frosted-glass miniitem cursor-pointer text-[#f4d4d8]">
					<div className="block">
						<div className="banner-card relative" id="container">
							<img
								src={photo}
								alt="team_image"
								className="sm:max-w-full md:max-w-fit"
								style={{ borderRadius: (teamType === "StudentTeams") ? '0' : '' }}
							></img>
						</div>
						<div className="p-6 transition duration-300 ease-in miniitem">
							<h2 className="text-xl font-bold mb-3 text-center">
								{teamName}
							</h2>
							{position !== "Student Coordinator" ? <h2 className="text-base text-md text-indigo-300 mb-1 text-center">{position}</h2> : null}
							{position === "Student Coordinator" ? <h2 className="text-base text-md text-indigo-300 mb-1 text-center">{email}</h2> : null}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default TeamsCard;
