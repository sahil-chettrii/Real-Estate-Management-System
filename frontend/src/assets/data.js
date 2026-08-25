const properties = [
  // Mumbai
  { id: "EST-1001", title: "Sea View Apartment", type: "Apartment", status: "For Sale", price: 18500000, location: "Bandra, Mumbai", beds: 3, baths: 2, area: 1450, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1002", title: "Worli Skyline Flat", type: "Apartment", status: "For Rent", price: 85000, location: "Worli, Mumbai", beds: 2, baths: 2, area: 1100, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1003", title: "Andheri Family Home", type: "House", status: "For Sale", price: 9500000, location: "Andheri, Mumbai", beds: 4, baths: 3, area: 1800, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop" },

  // Delhi
  { id: "EST-1004", title: "Vasant Kunj Villa", type: "Villa", status: "For Sale", price: 32000000, location: "Vasant Kunj, Delhi", beds: 5, baths: 4, area: 3200, image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1005", title: "Dwarka Sector Flat", type: "Apartment", status: "For Rent", price: 32000, location: "Dwarka, Delhi", beds: 2, baths: 1, area: 950, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1006", title: "Rohini Independent House", type: "House", status: "For Sale", price: 12500000, location: "Rohini, Delhi", beds: 4, baths: 3, area: 2000, image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop" },

  // Bengaluru
  { id: "EST-1007", title: "Whitefield Tech Home", type: "Apartment", status: "For Sale", price: 8900000, location: "Whitefield, Bengaluru", beds: 3, baths: 2, area: 1350, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1008", title: "Indiranagar Loft", type: "Apartment", status: "For Rent", price: 42000, location: "Indiranagar, Bengaluru", beds: 2, baths: 2, area: 1050, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1009", title: "Sarjapur Garden Villa", type: "Villa", status: "For Sale", price: 21000000, location: "Sarjapur, Bengaluru", beds: 4, baths: 4, area: 2800, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },

  // Hyderabad
  { id: "EST-1010", title: "Gachibowli Smart Flat", type: "Apartment", status: "For Sale", price: 7200000, location: "Gachibowli, Hyderabad", beds: 3, baths: 2, area: 1400, image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1011", title: "Jubilee Hills Bungalow", type: "House", status: "For Sale", price: 28500000, location: "Jubilee Hills, Hyderabad", beds: 5, baths: 4, area: 3400, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1012", title: "Kondapur PG Studio", type: "Apartment", status: "For Rent", price: 15000, location: "Kondapur, Hyderabad", beds: 1, baths: 1, area: 500, image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=800&auto=format&fit=crop" },

  // Chennai
  { id: "EST-1013", title: "OMR Coastal Flat", type: "Apartment", status: "For Sale", price: 6800000, location: "OMR, Chennai", beds: 3, baths: 2, area: 1300, image: "https://images.unsplash.com/photo-1524549046360-a71ed7cfa4bb?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1014", title: "Adyar Heritage Home", type: "House", status: "For Sale", price: 15500000, location: "Adyar, Chennai", beds: 4, baths: 3, area: 2200, image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1015", title: "T Nagar Rental Flat", type: "Apartment", status: "For Rent", price: 28000, location: "T Nagar, Chennai", beds: 2, baths: 1, area: 900, image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop" },

  // Pune
  { id: "EST-1016", title: "Koregaon Park Penthouse", type: "Apartment", status: "For Sale", price: 14500000, location: "Koregaon Park, Pune", beds: 3, baths: 3, area: 1700, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1017", title: "Baner Row House", type: "House", status: "For Sale", price: 11200000, location: "Baner, Pune", beds: 4, baths: 3, area: 2100, image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1018", title: "Hinjewadi IT Flat", type: "Apartment", status: "For Rent", price: 26000, location: "Hinjewadi, Pune", beds: 2, baths: 2, area: 1000, image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop" },

  // Kolkata
  { id: "EST-1019", title: "Salt Lake Family Flat", type: "Apartment", status: "For Sale", price: 5600000, location: "Salt Lake, Kolkata", beds: 3, baths: 2, area: 1250, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1020", title: "Ballygunge Colonial House", type: "House", status: "For Sale", price: 18900000, location: "Ballygunge, Kolkata", beds: 5, baths: 4, area: 2900, image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1021", title: "New Town Rental", type: "Apartment", status: "For Rent", price: 19000, location: "New Town, Kolkata", beds: 2, baths: 1, area: 850, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop" },

  // Ahmedabad
  { id: "EST-1022", title: "SG Highway Villa", type: "Villa", status: "For Sale", price: 16800000, location: "SG Highway, Ahmedabad", beds: 4, baths: 4, area: 2600, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1023", title: "Bopal Independent Home", type: "House", status: "For Sale", price: 8200000, location: "Bopal, Ahmedabad", beds: 3, baths: 2, area: 1600, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1024", title: "Satellite Rental Flat", type: "Apartment", status: "For Rent", price: 22000, location: "Satellite, Ahmedabad", beds: 2, baths: 2, area: 1000, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop" },

  // Jaipur
  { id: "EST-1025", title: "Malviya Nagar Bungalow", type: "House", status: "For Sale", price: 9800000, location: "Malviya Nagar, Jaipur", beds: 4, baths: 3, area: 2000, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1026", title: "C-Scheme Heritage Flat", type: "Apartment", status: "For Sale", price: 6500000, location: "C-Scheme, Jaipur", beds: 3, baths: 2, area: 1350, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1027", title: "Vaishali Nagar Rental", type: "Apartment", status: "For Rent", price: 16000, location: "Vaishali Nagar, Jaipur", beds: 2, baths: 1, area: 900, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop" },

  // Chandigarh
  { id: "EST-1028", title: "Sector 9 Modern Villa", type: "Villa", status: "For Sale", price: 24500000, location: "Sector 9, Chandigarh", beds: 4, baths: 4, area: 2700, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1029", title: "Sector 22 Family Flat", type: "Apartment", status: "For Sale", price: 8700000, location: "Sector 22, Chandigarh", beds: 3, baths: 2, area: 1400, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
  { id: "EST-1030", title: "Sector 34 Rental House", type: "House", status: "For Rent", price: 35000, location: "Sector 34, Chandigarh", beds: 3, baths: 2, area: 1500, image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop" },
];

export default properties;