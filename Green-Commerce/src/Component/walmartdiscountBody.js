import React from 'react';

const deals = [
    {
        id: 1,
        title: 'School supplies',
        subtitle: 'up to 50% off',
        linkText: 'Shop Deals',
        linkHref: '/deals/school-supplies',
        bgColor: '#7ED6F9',
    },
    {
        id: 2,
        title: 'Up to 25% off TVs',
        linkText: 'Shop Deals',
        linkHref: '/deals/tvs',
        bgColor: '#7ED6F9',
    },
    {
        id: 3,
        title: 'Resold at Walmart:',
        subtitle: 'up to 20% off',
        linkText: 'Shop Deals',
        linkHref: '/deals/resold',
        bgColor: '#7ED6F9',
    },
    {
        id: 4,
        title: 'Deals on Apple? Genius!',
        linkText: 'Shop Deals',
        linkHref: '/deals/apple',
        bgColor: '#7ED6F9',
    },
    {
        id: 5,
        large: true,
        title: 'Walmart DEALS',
        subtitle: 'JULY 8–13 ONLY! Top 100 Deals',
        linkText: 'Shop Deals',
        linkHref: '/deals/top-100',
        bgColor: '#41A6F6',
    },
];

export default function DealsGrid() {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridAutoRows: 200,
                gap: 16,
                padding: 16,
            }}
        >
            {deals.map((d) => {
                const isLarge = !!d.large;
                return (
                    <div
                        key={d.id}
                        style={{
                            position: 'relative',
                            padding: 16,
                            backgroundColor: d.bgColor,
                            borderRadius: 8,
                            overflow: 'hidden',
                            // make the center card span 2×2
                            ...(isLarge && {
                                gridColumn: '2 / span 2',
                                gridRow: '1 / span 2',
                            }),
                        }}
                    >
                        <div style={{ maxWidth: isLarge ? '60%' : '50%' }}>
                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: isLarge ? 24 : 18,
                                    fontWeight: 'bold',
                                    color: '#004AAD',
                                    lineHeight: 1.2,
                                }}
                            >
                                {d.title}
                                {d.subtitle && (
                                    <>
                                        <br />
                                        {d.subtitle}
                                    </>
                                )}
                            </h3>
                            <a
                                href={d.linkHref}
                                style={{
                                    display: 'inline-block',
                                    marginTop: 8,
                                    textDecoration: 'underline',
                                    color: '#004AAD',
                                    fontSize: 14,
                                }}
                            >
                                {d.linkText}
                            </a>
                        </div>

                        {/* placeholder “image” box */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                width: isLarge ? '50%' : '40%',
                                height: isLarge ? '70%' : '50%',
                                backgroundColor: '#fff',
                                borderRadius: 4,
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
