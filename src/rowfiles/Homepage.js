import { FaHeartbeat } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GiKneeCap } from "react-icons/gi";
import { MdFace } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { LuStethoscope } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FaRadiationAlt } from "react-icons/fa";
import DoctorImage from "../asset/images (2).jpeg"

export const adminCard = [
    {
        TotalNum:100000,
        Type:"Total Doctors"
    },
    {
        TotalNum:100000,
        Type:"Appointment"
    },
    {
        TotalNum:100000,
        Type:"Today Appointment"
    },
    {
        TotalNum:100000,
        Type:"payment pendings"
    },
];

export const topethreeDoctor = [{
    imageUrl :DoctorImage,
    name:"lhkah aiohoahfoah s",
    specility:"Cardilogy",
    id:'123',
    rating:2.5
},{
    imageUrl :DoctorImage,
    name:"lhkah aiohoahfoah s",
    specility:"Cardilogy",
    id:'123',
    rating:2.5
},{
    imageUrl :DoctorImage,
    name:"lhkah aiohoahfoah s",
    specility:"Cardilogy",
    id:'123',
    rating:2.5
}]

export const specialities = [
    {
        text:"Cardilogy",
        icon:FaHeartbeat
    },
    {
        text:"Neurology",
        icon:GiBrain
    },
    {
        text:"Orthopedics",
        icon:GiKneeCap
    },
    {
        text:"pediatrics",
        icon:MdFace
    },{
        text:"Blood Bank",
        icon:MdBloodtype
    },{
        text:"Gernal Medicline",
        icon:LuStethoscope
    },
    {
        text:"Eye Care",
        icon:FaRegEye
    },
    {
        text:"Radilogy",
        icon:FaRadiationAlt
    },

];

