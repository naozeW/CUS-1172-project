import {
    fetch
} from "./fetch"
const baseUrl = "/"

export function getQ() {
    return fetch({
        url: baseUrl + "getQuestion",
        method: "get",
    })
}