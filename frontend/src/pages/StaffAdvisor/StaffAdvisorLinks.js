import editSvg from'../../icons/edit.svg'
import userSvg from'../../icons/user.svg'
import bookSvg from'../../icons/book.svg'
import fitnessSvg from'../../icons/fitness.svg'

const saLinks=[
    {
        title:"Students Details",
        to:"staffadvisor/studentsdetails",
        icon: fitnessSvg,
    },
    {
        title:"Signup Invite",
        to:"staffadvisor/signupinvite",
        icon: editSvg,
    },
    {
        title:" View Applications",
        to:"staffadvisor/SaViewApplication",
        icon: bookSvg,
    }
]

export {saLinks}