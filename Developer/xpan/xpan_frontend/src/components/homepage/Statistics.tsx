const stats = [
    { id: 1, value: '5k +', name: 'Total  Active Users' },
    { id: 2, value: '$605k', name: 'Total  Value Traded' },
    { id: 3, value: '26k +', name: 'Total  Running Bots' },
]

export default function Statistics() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                {stat.value}
                            </dt>
                            <dd className="text-base leading-7 text-gray-600">{stat.name}</dd>

                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}