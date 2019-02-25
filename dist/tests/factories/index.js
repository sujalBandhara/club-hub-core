"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
var Factory = require("factory.ts");
var Faker = require("faker");
// Internal Dependencies
var firebaseService_1 = require("../../Firebase/firebaseService");
// Interfaces
var types_1 = require("../../Firebase/types");
// Builders
var createEventImageStrings = function () {
    var urlArray = [];
    for (var index = 0; index < 3; index++) {
        urlArray.push(Faker.internet.url());
    }
    return urlArray;
};
var createMemberFactory = Factory.makeFactory({
    email: Factory.each(function (i) { return Faker.internet.email(); }),
    firstName: Factory.each(function (i) { return Faker.name.firstName(); }),
    lastName: Factory.each(function (i) { return Faker.name.lastName(); }),
    memberNumber: Factory.each(function (i) { return Faker.random.number().toString(); }),
    memberSince: Factory.each(function (i) { return Faker.date.past().toISOString(); }),
    phoneNumber: Factory.each(function (i) { return Faker.phone.phoneNumber(); }),
    profileImage: Factory.each(function (i) { return Faker.internet.url(); }),
    club: 'Redmond',
    role: 'Member',
    public: true,
    showContactInfo: true
});
exports.CreateMemberFactory = createMemberFactory;
var createMemberMetadataFactory = Factory.makeFactory({
    street: Factory.each(function (i) { return Faker.address.streetName(); }),
    city: Factory.each(function (i) { return Faker.address.city(); }),
    state: Factory.each(function (i) { return Faker.address.stateAbbr(); }),
    zip: Factory.each(function (i) { return Faker.address.zipCode(); }),
    initiationAmount: Faker.finance.amount(),
    preferredVendors: Factory.each(function (i) { return Faker.lorem.paragraph(2); }),
    parkingSpace: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    automotivePassion: Factory.each(function (i) { return Faker.lorem.paragraph(2); }),
    carShowcase: Factory.each(function (i) { return Faker.lorem.paragraph(2); }),
    significantOther: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    keyOnsite: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    shirtSize: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    hatSize: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    memberReference: Factory.each(function (i) { return Faker.lorem.paragraph(2); }),
    membershipPlan: Factory.each(function (i) { return Faker.lorem.paragraph(2); })
});
exports.CreateMemberMetadataFactory = createMemberMetadataFactory;
var createEventFactory = Factory.makeFactory({
    street: Factory.each(function (i) { return Faker.address.streetName(); }),
    city: Factory.each(function (i) { return Faker.address.city(); }),
    state: Factory.each(function (i) { return Faker.address.stateAbbr(); }),
    zip: Factory.each(function (i) { return Faker.address.zipCode(); }),
    public: true,
    club: 'Redmond',
    eventType: 'Hosted by DC',
    location: Factory.each(function (i) { return Faker.company.companyName(); }),
    date: new Date().toDateString(),
    fullMonth: false,
    description: Factory.each(function (i) { return Faker.lorem.paragraph(4); }),
    endTime: Faker.date.future().toDateString(),
    images: [createEventImageStrings()],
    name: Factory.each(function (i) { return Faker.name.firstName(); }),
    price: Faker.finance.amount(),
    startTime: Faker.date.future().toDateString(),
    linkName: 'linkName'
});
var createProviderFactory = Factory.makeFactory({
    companyName: Factory.each(function (i) { return Faker.company.companyName(); }),
    contactName: Factory.each(function (i) { return Faker.company.companyName(); }),
    phoneNumber: Factory.each(function (i) { return Faker.phone.phoneNumber(); }),
    email: Factory.each(function (i) { return Faker.internet.email(); }),
    street: Factory.each(function (i) { return Faker.address.streetName(); }),
    city: Factory.each(function (i) { return Faker.address.city(); }),
    state: Factory.each(function (i) { return Faker.address.stateAbbr(); }),
    zip: Factory.each(function (i) { return Faker.address.zipCode(); })
});
exports.createProviderFactory = createProviderFactory;
var createVehicleFactory = Factory.makeFactory({
    club: 'Redmond',
    color: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    image: Factory.each(function (i) { return Faker.internet.url(); }),
    memberID: Factory.each(function (i) { return Faker.random.number().toString(); }),
    model: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    make: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    year: Factory.each(function (i) { return Faker.date.past(60).toDateString(); }),
    description: Factory.each(function (i) { return Faker.lorem.paragraph(1); })
});
exports.CreateVehicleFactory = createVehicleFactory;
var createServiceFactory = Factory.makeFactory({
    date: Date.now().toString(),
    memberID: Factory.each(function (i) { return Faker.random.number().toString(); }),
    notes: Factory.each(function (i) { return Faker.lorem.paragraph(4); }),
    providerID: Factory.each(function (i) { return Faker.random.number().toString(); }),
    status: Factory.each(function (i) { return Faker.lorem.slug(1); }),
    time: Factory.each(function (i) { return Faker.random.number().toString(); }),
    vehicleID: Factory.each(function (i) { return Faker.random.number().toString(); }),
});
exports.CreateServiceFactory = createServiceFactory;
// Creators
var createMember = function () {
    var member = createMemberFactory.build();
    return firebaseService_1.default.createResource(types_1.ResourcePaths.members, member);
};
exports.CreateMember = createMember;
var createMemberWithName = function (firstName) {
    var member = createMemberFactory.build();
    member.firstName = firstName;
    return firebaseService_1.default.createResource(types_1.ResourcePaths.members, member);
};
exports.CreateMemberWithName = createMemberWithName;
var createMemberMetadata = function (memberID) {
    var memberMetadata = createMemberMetadataFactory.build();
    memberMetadata.memberID = memberID;
    return firebaseService_1.default.createResource(types_1.ResourcePaths.memberMetadata, memberMetadata);
};
exports.CreateMemberMetadata = createMemberMetadata;
var createEvent = function () {
    var path = 'events';
    var event = createEventFactory.build();
    event.images = createEventImageStrings();
    return firebaseService_1.default.createResource(path, event);
};
exports.CreateEvent = createEvent;
var createPrivateEvent = function () {
    var path = 'events';
    var event = createEventFactory.build();
    event.images = createEventImageStrings();
    event.public = false;
    return firebaseService_1.default.createResource(path, event);
};
exports.CreatePrivateEvent = createPrivateEvent;
var createVehicle = function (memberID) {
    var vehicle = createVehicleFactory.build();
    vehicle.memberID = memberID;
    return firebaseService_1.default.createResource(types_1.ResourcePaths.vehicles, vehicle);
};
exports.CreateVehicle = createVehicle;
var createVehicleWithMake = function (memberID, make) {
    var vehicle = createVehicleFactory.build();
    vehicle.memberID = memberID;
    vehicle.make = make;
    return firebaseService_1.default.createResource(types_1.ResourcePaths.vehicles, vehicle);
};
exports.CreateVehicleWithMake = createVehicleWithMake;
var createRSVP = function (memberID, eventID) {
    var id = Faker.random.number().toString();
    var rsvp = { eventID: eventID, memberID: memberID };
    return firebaseService_1.default.createResource(types_1.ResourcePaths.eventRsvps, rsvp);
};
exports.CreateRSVP = createRSVP;
var createService = function (vehicleID, memberID, date) {
    var service = createServiceFactory.build();
    service.vehicleID = vehicleID;
    service.date = date ? date : service.date;
    service.status = types_1.ServiceStatus.Submitted;
    if (memberID)
        service.memberID = memberID;
    return firebaseService_1.default.createResource(types_1.ResourcePaths.services, service);
};
exports.CreateService = createService;
var createProvider = function () {
    var provider = createProviderFactory.build();
    return firebaseService_1.default.createResource(types_1.ResourcePaths.providers, provider);
};
exports.CreateProvider = createProvider;
//# sourceMappingURL=index.js.map