import {Entity} from "../Model/Classifiers/Entity";
import {ChildEntity} from "../Model/Classifiers/ChildEntity";

export class ClassifierLoadService {

    //public loadRegions(): Array<Region> {
    //    var regions: Array<Region> = new Array();
    //    regionsMock.forEach(function (element) {
    //        regions.push(new Region(element.id, element.name));
    //    });
    //    return regions;
    //}

    //public loadDistricts(region: Region): Array<District> {
    //    var districts: Array<District> = new Array();
    //    var regionId = region.id;
    //    var filteredDistricts = districtsMock.filter(function(district){
    //        return district.parentId === regionId;
    //    });
    //    filteredDistricts.forEach(function(district) {
    //        districts.push(new District(district.id, district.name, regionId));
    //    });
    //    return districts;
    //}

    public loadEntities(entitiesMock): Array<Entity> {
        var entities: Array<Entity> = new Array();
        entitiesMock.forEach(function(entityMock) {
            var entity: Entity = new Entity(entityMock.id, entityMock.name);
            entities.push(entity);
        });
        return entities;
    }

    public loadChildEntities(childEntitiesMock, parentId: number): Array<ChildEntity> {
        var childEntities: Array<ChildEntity> = new Array();
        var filteredChildEntities = childEntitiesMock.filter(function(childEntityMock) {
            return childEntityMock.parentId == parentId;
        });
        filteredChildEntities.forEach(function(childEntityMock) {
            var childEntity: ChildEntity = new ChildEntity(childEntityMock.id, childEntityMock.name, childEntityMock.parentId);
            childEntities.push(childEntity);
        });
        return childEntities;
    }
}