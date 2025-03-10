import React, { useEffect, useState } from 'react';
import TeamsCard from './TeamsCard';
import './Teams.css';
import bg from './DSC01325_2.jpg';

// Image Imports
import director from './media/director.jpg';
import sac from './media/SAC_PRES.jpeg';
import dean from './media/dean.jpeg';

import ben from './media/PROF_SATISH_BEN.jpeg';
import murali from './media/Murali.jpg';
import hari from './media/Hari.jpg';
import azeem from './media/Azeem.jpg';
import dhari from './media/DHari.jpg';

import chand from './media/Chander.jpeg';
import sahith from './media/Sahith.jpeg';
import prashant from './media/Prashant.jpeg';
import thanish from './media/Thanish.jpeg';

const teamInformation = [

	// Director
	{
		teamName: ' Prof. Bidyadhar Subudhi ',
		position: 'Director',
		photo: director,
		link: '',
		email: '',
		phoneNum: '',
		importance: 'Yes',
	},

	// 2
	{
		teamName: 'Prof. D. Srinivasacharya',
		position: 'Dean Student Welfare',
		photo: dean,
		link: '',
		email: '',
		phoneNum: '',
		importance: 'Yes',
	},
	{
		teamName: 'Prof P. Hari Krishna',
		position: 'SAC President',
		photo: sac,
		link: '',
		email: '',
		phoneNum: '',
		importance: 'Yes',
	},

	// Vice Presidents
	{
		teamName: 'Prof B. Satish Ben',
		position: 'Vice President Cultural',
		photo: ben,
		link: '',
		email: '',
		phoneNum: '',
		importance: 'No',
	},
	{
		teamName: 'Prof. P. Muralidhar',
		position: 'Vice President Film-Music',
		photo: murali,
		link: '',
		email: '',
		phoneNum: '',
		importance: 'No',
	},
	{
		teamName: 'Prof. P. Hari Prasad Reddy',
		position: 'Vice President Technical',
		photo: hari,
		link: '',
		email: '',
		phoneNum: '',
		importance: 'No',
	},
	{
		teamName: 'Prof. P. Abdul Azeem',
		position: 'Vice President Sports',
		photo: azeem,
		link: '',
		email: '',
		phoneNum: '',
		importance: 'No',
	},
	{
		teamName: 'Dr. D. Hari',
		position: 'Assistant Registrar SAC',
		photo: dhari,
		link: '',
		email: '',
		phoneNum: '',
		importance: 'No',
	},



	// Student Coordinators
	{
		teamName: 'P. Satya sai Sahith',
		position: 'Student Coordinator',
		photo: sahith,
		link: '',
		email: 'sec_cultural@nitw.ac.in',
		phoneNum: '',
		importance: 'No',
	},
	{
		teamName: 'Prashant Kumar',
		position: 'Student Coordinator',
		photo: prashant,
		link: '',
		email: 'sec_fms@nitw.ac.in',
		phoneNum: '',
		importance: 'No',
	},
	{
		teamName: 'Thanish Nasir Ahammed',
		position: 'Student Coordinator',
		photo: thanish,
		link: '',
		email: 'sec_sports@nitw.ac.in',
		phoneNum: '',
		importance: 'No',
	},
	{
		teamName: 'Ramavath Chander Nayak',
		position: 'Student Coordinator',
		photo: chand,
		link: '',
		email: 'sec_technical@nitw.ac.in',
		phoneNum: '',
		importance: 'No',
	},

];

const Teams = () => {
	const [teamInfo, SetTeamInfo] = useState(teamInformation);

	useEffect(() => {
		const URL = process.env.REACT_APP_BACKEND_URL;
		const getTeam = async () => {
			const response = await fetch(`${URL}/api/team`, {
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			let data = await response.json();
			console.log(data);
			const newTeam = [
				...teamInfo,
				...data.map((x, index) => ({
					teamName: x.name,
					// make URL safe
					link: '/team/' + encodeURIComponent(x.name),

					...x,
					key: index,
				})),
			];
			SetTeamInfo(newTeam);
		};

		getTeam();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="bg-bgBlue text-white">
			<img src={bg} className='bg-img' alt='bg' />
			<div className="bg-purple text-pink pt-[100px] text-center flex">
				<h1 className="sponsors-hero-title text-4xl font-[800] text-bolder mx-auto flex justify-start items-center text-center">
					SpringSpree Team
				</h1>
			</div>
			<section className="md:h-full flex items-center text-gray-60 bg-purple">
				<div className="container py-8 mx-auto" style={{
					maxWidth: "90%",
				}}>
					<div className="text-center mb-8 mt-4">
						<h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
							Director
						</h1>
					</div>
					<div className="flex flex-wrap justify-center -m-4 md:px-12 sm:px-16">
						{teamInfo.map((team, index) => {
							if (index === 0) {
								return (
									<TeamsCard
										key={index}
										teamName={team.teamName}
										position={team.position}
										photo={team.photo}
										link={team.link}
										members={team.members}
										imporatance={team.importance}
									/>
								);
							} else return <></>;
						})}
					</div>
					<br />
					<br />
					<div className="text-center mb-8 mt-4">
						<h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
							Dean and SAC President
						</h1>
					</div>
					<div className="flex flex-wrap justify-center -m-4 md:px-12 sm:px-16">
						{teamInfo.map((team, index) => {
							if (index > 0 && index <= 2) {
								return (
									<TeamsCard
										key={index}
										teamName={team.teamName}
										position={team.position}
										photo={team.photo}
										link={team.link}
										members={team.members}
										imporatance={team.importance}
									/>
								);
							} else return <></>;
						})}
					</div>
					<br />
					<br />
					<div className="text-center mb-8 mt-4">
						<h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
							Vice Presidents & Assistant Registrar
						</h1>
					</div>
					<div className="flex flex-wrap justify-center -m-4 md:px-12 sm:px-16">
						{teamInfo.map((team, index) => {
							if (index > 2 && index <= 7) {
								return (
									<TeamsCard
										key={index}
										teamName={team.teamName}
										position={team.position}
										photo={team.photo}
										link={team.link}
										members={team.members}
									/>
								);
							} else return <></>;
						})}
					</div>
					<br />
					<br />
					<div className="text-center mb-8 mt-4">
						<h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
							Student Secretaries
						</h1>
					</div>
					<div className="flex flex-wrap justify-center -m-4 md:px-12 sm:px-16">
						{teamInfo.map((team, index) => {
							if (index > 7 && index <= 11) {
								return (
									<TeamsCard
										key={index}
										teamName={team.teamName}
										position={team.position}
										photo={team.photo}
										link={team.link}
										members={team.members}
										email={team.email}
										imporatance={team.importance}
									/>
								);
							} else return <></>;
						})}
					</div>
					<br />
					<br />
					<div className="text-center mb-8 bt-4">
						<h1 className="sponsors-hero-title text-3xl md:text-3xl text-bolder mb-1">
							Student Teams
						</h1>
					</div>
					<div className="flex flex-wrap justify-center -m-4 md:px-12 sm:px-16">
						{teamInfo.map((team, index) => {
							if (index > 11) {
								return (
									<TeamsCard
										key={index}
										teamName={team.teamName}
										position={team.position}
										photo={team.photo}
										link={team.link}
										members={team.members}
										imporatance={"No"}
										teamType='StudentTeams'
									/>
								);
							} else return <></>;
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Teams;
