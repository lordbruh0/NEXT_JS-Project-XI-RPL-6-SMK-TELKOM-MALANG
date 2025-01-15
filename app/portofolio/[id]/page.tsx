import Link from 'next/link';
import Image from 'next/image';
import { arrayPorto } from '../../../data/portofolio';

type Params = {
    id: string;
}

export default function projectDetail({ params }: { params: Params }) {
    const { id } = params;
    const porto = arrayPorto.find(p => p.id === parseInt(id));

    if (!porto) return <div>Project not found</div>
        return (
            <div className='container mx-auto'>
                <div className='bg-black mx-auto max-w-2xl px-4 py-16 sm:px-10 sm:py-5 lg:max-w-7xl lg:px-8 h-auto'>
                    <Link href="/portofolio" className='text-lg font-bold tracking-tight text-left text-white pr-10'>back to art gallery</Link>
                    <div className='flex items-center justify-center pb-10'>
                    <h1 className='text-2xl font-bold text-white pr-10'>{porto.name}</h1>
                    <p className='font-semibold text-2xl text-white'>({porto.category})</p>
                    </div>
                    <p className='mb-4 text-white'>{porto.description}</p>
                    <Image
                        alt={porto.name}
                        src={porto.image}
                        width={500}
                        height={50}
                        className=""
                        unoptimized />

                </div>
            </div>
        )
    
}