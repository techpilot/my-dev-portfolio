import bodyfast_img from "@/assets/images/bodyfast_img.png";
import spox_img from "@/assets/images/spox_img.png";
import andro_img from "@/assets/images/andro_img.png";
import pininterest_img from "@/assets/images/pininterest_img.png";
import rivulet_img from "@/assets/images/rivulet.png"
import msnetwork_img from "@/assets/images/msnetwork.png"
import starkwager_img from "@/assets/images/starkwager.png"
import stellar_img from "@/assets/images/stellar.png"
import safeswap_img from "@/assets/images/safeswap.png"

export const projects = [
    {
        id: 1,
        img: bodyfast_img,
        title: "Bodyfast",
        description: "Bodyfast is a mobile application that allows millions of users to track their daily workouts and view their progress over time. It also allows users to create workouts and share them with friends.",
        tech: ["React", "TypeScript"],
        website: "https://bodyfast.app",
        short_description: "An application that allows users to track their daily workouts",
        category: ["web"]
    },
    {
        id: 2,
        img: spox_img,
        title: "SPOX",
        description: "SPOX is a mobile application that allows users to track their daily workouts and view their progress over time. It also allows users to create workouts and share them with friends.",
        tech: ["Angular", "TypeScript", "Node.js", "Nest.js", "PostgreSQL", "Socket.io", "Redis", "CI/CD"],
        website: "https://app.spox.trading",
        short_description: "A trading platform where users can trade sports tokens",
        category: ["web"]
    },
    {
        id: 3,
        img: starkwager_img,
        title: "StarkWager",
        description: "Starknet ID protocol is an open source interface for the decentralized identity protocol Starknet id",
        tech: ["React", "TypeScript"],
        website: "https://andromedia.cc",
        short_description: "An open source interface for the decentralized identity protocol Starknet ID",
        category: ["open-source", "web3"],
        github: "https://github.com/techpilot/affiliate.starknet.id.git"
    },
    {
        id: 4,
        img: stellar_img,
        title: "Scaffold Stellar",
        description: "Scaffold Stellar is a cutting-edge project template designed to provide developers with a robust, high-performance starting point for full-stack applications. By combining the power of Next.js and Rust, this scaffold offers an optimized development experience with modern web technologies.",
        tech: ["React", "TypeScript", "Rust", "Stellar Blockchain"],
        website: "https://app.pininterest.com",
        short_description: "A cutting-edge project template designed to provide developers with a starting point for full-stack applications",
        category: ["open-source", "web3"],
        github: "https://github.com/ScaffoldRust/SRust-Basic-Stellar-nextjs-pnpm.git"
    },
    {
        id: 5,
        img: andro_img,
        title: "Andromedia",
        description: "Andromedia is a customer service application that help business owners to engage visitors through the live chat widget and offer personalized discounts based on their activity to turn them into loyal customers.",
        tech: ["React", "JavaScript", "Django", "Socket.io"],
        website: "https://andromedia.cc",
        short_description: "A marketing widget platform",
        category: ["web"]
    },
    {
        id: 6,
        img: pininterest_img,
        title: "Pininterest",
        description: "",
        tech: ["React", "TypeScript", "Sanity.io"],
        website: "https://app.pininterest.com",
        short_description: "Cool collection of your amazing memories",
        category: ["open-source", "web"]
    },
    {
        id: 7,
        img: rivulet_img,
        title: "Crypto Rivulet",
        description: "Crypto Rivulet is a token swap system that is used to swap provided tokens after successfully connecting to user's wallet",
        tech: ["React", "TypeScript", "Web3", "Ethereum", "Solidity"],
        website: "https://crypto-rivulet.vercel.app",
        short_description: "A crypto transfer and swap platform",
        category: ["web3"]
    },
    {
        id: 8,
        img: msnetwork_img,
        title: "MS Network",
        description: "Ms Network is a staff management dashboard application own by the 82 Division of Nigerian Army",
        tech: ["React", "JavaScript", "Django"],
        website: "",
        short_description: "A staff management dashboard for the Nigerian Army",
        category: ["web"]
    },
    {
        id: 9,
        img: safeswap_img,
        title: "SafeSwap",
        description: "Web Marketplace with Escrow Contracts, a decentralized platform for buying and selling products with escrowed payments. Powered by Stellar and integrated with the Trustless Work API, this marketplace offers a secure and trustless environment for transactions across various product categories.",
        tech: ["Next.js", "NestJS", "TypeScript", "Stellar Blockchain", "PostgreSQL"],
        website: "",
        short_description: "A Web Marketplace with Escrow Contracts",
        category: ["open-source", "web3"],
        github: "https://github.com/techpilot/SafeSwap.git"
    },
]

export const componentsType = {
    landing: "landing",
    des: "des",
    what: "what",
    brief: "brief",
    expertise: "expertise",
    contact: "contact",
}