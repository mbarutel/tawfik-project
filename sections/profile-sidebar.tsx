// import Image from "next/image";
// import { profileData } from "@/lib/data";
// import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
//
// export default function ProfileSidebar() {
//   return (
//     <div className="flex flex-col gap-6">
//       {/* <ProfilePhoto /> */}
//       <EducationSection />
//       <SkillsSection />
//       <ContactSection />
//     </div>
//   );
// }
//
// // function ProfilePhoto() {
// //   return (
// //     <div className="flex flex-col">
// //       <div className="relative w-full aspect-[3/4] mb-4">
// //         <Image
// //           src="/marcus-profile.webp"
// //           alt="Marcus Tawfik - Executive Coach"
// //           fill
// //           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
// //           className="object-cover"
// //           priority
// //         />
// //       </div>
// //       <h1 className="text-4xl xl:text-5xl font-bold text-primary text-center mb-1">
// //         {profileData.name}
// //       </h1>
// //     </div>
// //   );
// // }
//
// function EducationSection() {
//   return (
//     <div>
//       <div className="bg-primary text-secondary p-6 mb-4">
//         <h2 className="text-2xl font-semibold tracking-wider">EDUCATION</h2>
//       </div>
//       <ul className="flex flex-col gap-3 text-primary montserrat ml-3">
//         {profileData.education.map((edu, index) => (
//           <li className="!text-base" key={index}>
//             <span className="font-semibold">{edu.degree}</span> - {edu.field}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//
// function SkillsSection() {
//   return (
//     <div>
//       <div className="bg-primary text-secondary p-6 mb-4">
//         <h2 className="text-2xl font-semibold tracking-wider">SKILLS</h2>
//       </div>
//       <ul className="flex flex-col gap-3 text-primary montserrat ml-3">
//         {profileData.skills.map((skill, index) => (
//           <li className="!text-base" key={index}>
//             <span className="mr-3 text-primary font-bold">•</span>
//             <span className="italic">{skill}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//
// function ContactSection() {
//   return (
//     <div className="bg-primary p-6">
//       <h2 className="text-secondary text-2xl font-semibold tracking-wider mb-4">
//         CONTACT
//       </h2>
//       <div className="flex flex-col gap-3 montserrat">
//         <a
//           href={`tel:${profileData.contact.phone.replace(/\s/g, "")}`}
//           className="flex items-center gap-3 hover:text-secondary transition"
//         >
//           <FaPhoneAlt className="text-xl flex-shrink-0" />
//           <span>{profileData.contact.phone}</span>
//         </a>
//         <a
//           href={`mailto:${profileData.contact.email}`}
//           className="flex items-center gap-3 hover:text-secondary transition break-all"
//         >
//           <FaEnvelope className="text-xl flex-shrink-0" />
//           <span>{profileData.contact.email}</span>
//         </a>
//         <a
//           href={`https://${profileData.contact.website}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-3 hover:text-secondary transition break-all"
//         >
//           <FaGlobe className="text-xl flex-shrink-0" />
//           <span>{profileData.contact.website}</span>
//         </a>
//       </div>
//     </div>
//   );
// }
