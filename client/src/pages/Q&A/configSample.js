import { faAtom ,faMap,faSprayCan , faScaleBalanced , faWeightScale ,faRobot} from "@fortawesome/free-solid-svg-icons";

export const configSample = [
   {
      icon:faAtom,
      title:'Tìm nguyên tố',
      desc:'Tìm nguyên tố với Z và E',
      type:"ZN"

   },
   {
       icon:faMap,
       title:'Cấu hình electron',
       desc:"Tìm cấu hình electron",
       type:"Electron"
   },
   {
    icon:faSprayCan,
    title:'Oxy hoá khử',
    desc:"Xác định phương trình oxy hoá ",
    type:"Oxy",
},
{
    icon:faScaleBalanced,
    title:'Cân bằng phản ứng',
    desc:"Cân bằng lại phương trình ",
    type:"Balance",
},{
    icon:faWeightScale,
    title:'Khối lượng sau phản ứng',
    desc:"Tính khối lượng sau phản ứng ",
    type:"After",
},{
    icon:faRobot,
    title:'Giải bài tự do',
    desc:"Giải bài liên quan tới hoá học",
    type:"Free",
},
]