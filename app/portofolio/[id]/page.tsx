import Link from 'next/link';
import Image from 'next/image';
import { arrayPorto } from '../../../data/portofolio';

type Params = {
    id: string;
}

export default function projectDetail({ params }: { params: Params }) {
    const { id } = params;
    const porto = arrayPorto.find(P => P.id === parseInt(id));

    if (!porto) {
        return (
            <div className='container mx-auto p-4'>
                <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                    <Link href="/portofolio" className='inline-block mb-6 text-soft-brown hover:underline'></Link>
                    <p className='font-semibold text-sm text-soft-brown'>{porto.category}</p>
                    <h1 className='text-2xl font-bold text-white'>{porto.name}</h1>
                    <p className='mb-4'>{porto.description}</p>
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
}