import * as did from '../src/did'
import { KeyType } from '../src/types'

describe("publicKeyToDid", () => {

  it("handles RSA Keys", async () => {
    const pubkey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnzyis1ZjfNB0bBgKFMSvvkTtwlvBsaJq7S5wA+kzeVOVpVWwkWdVha4s38XM/pa/yr47av7+z3VTmvDRyAHcaT92whREFpLv9cj5lTeJSibyr/Mrm/YtjCZVWgaOYIhwrXwKLqPr/11inWsAkfIytvHWTxZYEcXLgAXFuUuaS3uF9gEiNQwzGTU1v0FqkqTBr4B8nW3HCN47XUu0t8Y0e+lf4s4OxQawWD79J9/5d3Ry0vbV3Am1FtGJiJvOwRsIfVChDpYStTcHTCMqtvWbV6L11BWkpzGXSW4Hv43qa+GSYOD2QU68Mb59oSk2OB+BtOLpJofmbGEGgvmwyCI9MwIDAQAB"
    const expectedDid = "did:key:z13V3Sog2YaUKhdGCmgx9UZuW1o1ShFJYc6DvGYe7NTt689NoL2RtpVs65Zw899YrTN9WuxdEEDm54YxWuQHQvcKfkZwa8HTgokHxGDPEmNLhvh69zUMEP4zjuARQ3T8bMUumkSLGpxNe1bfQX624ef45GhWb3S9HM3gvAJ7Qftm8iqnDQVcxwKHjmkV4hveKMTix4bTRhieVHi1oqU4QCVy4QPWpAAympuCP9dAoJFxSP6TNBLY9vPKLazsg7XcFov6UuLWsEaxJ5SomCpDx181mEgW2qTug5oQbrJwExbD9CMgXHLVDE2QgLoQMmgsrPevX57dH715NXC2uY6vo2mYCzRY4KuDRUsrkuYCkewL8q2oK1BEDVvi3Sg8pbC9QYQ5mMiHf8uxiHxTAmPedv8"
    const result = did.publicKeyToDid(pubkey, KeyType.RSA)
    expect(result).toEqual(expectedDid)
  })

  it("handles Ed25519 Keys", async () => {
    const pubkey = "Hv+AVRD2WUjUFOsSNbsmrp9fokuwrUnjBcr92f0kxw4="
    const expectedDid = "did:key:z6MkgYGF3thn8k1Fv4p4dWXKtsXCnLH7q9yw4QgNPULDmDKB"
    const result = did.publicKeyToDid(pubkey, KeyType.Edwards)
    expect(result).toEqual(expectedDid)
  })

  it("handles BLS12-381 Keys", async () => {
    const pubkey = "Hv+AVRD2WUjUFOsSNbsmrp9fokuwrUnjBcr92f0kxw4="
    const expectedDid = "did:key:z6HpYD1br5P4QVh5rjRGAkBfKMWes44uhKmKdJ6dN2Nm9gHK"
    const result = did.publicKeyToDid(pubkey, KeyType.BLS)
    expect(result).toEqual(expectedDid)
  })

})

describe("didToPublicKey", () => {

  it("handles RSA Keys", async () => {
    const toDecode = "did:key:z13V3Sog2YaUKhdGCmgx9UZuW1o1ShFJYc6DvGYe7NTt689NoL2RtpVs65Zw899YrTN9WuxdEEDm54YxWuQHQvcKfkZwa8HTgokHxGDPEmNLhvh69zUMEP4zjuARQ3T8bMUumkSLGpxNe1bfQX624ef45GhWb3S9HM3gvAJ7Qftm8iqnDQVcxwKHjmkV4hveKMTix4bTRhieVHi1oqU4QCVy4QPWpAAympuCP9dAoJFxSP6TNBLY9vPKLazsg7XcFov6UuLWsEaxJ5SomCpDx181mEgW2qTug5oQbrJwExbD9CMgXHLVDE2QgLoQMmgsrPevX57dH715NXC2uY6vo2mYCzRY4KuDRUsrkuYCkewL8q2oK1BEDVvi3Sg8pbC9QYQ5mMiHf8uxiHxTAmPedv8"
    const expectedKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnzyis1ZjfNB0bBgKFMSvvkTtwlvBsaJq7S5wA+kzeVOVpVWwkWdVha4s38XM/pa/yr47av7+z3VTmvDRyAHcaT92whREFpLv9cj5lTeJSibyr/Mrm/YtjCZVWgaOYIhwrXwKLqPr/11inWsAkfIytvHWTxZYEcXLgAXFuUuaS3uF9gEiNQwzGTU1v0FqkqTBr4B8nW3HCN47XUu0t8Y0e+lf4s4OxQawWD79J9/5d3Ry0vbV3Am1FtGJiJvOwRsIfVChDpYStTcHTCMqtvWbV6L11BWkpzGXSW4Hv43qa+GSYOD2QU68Mb59oSk2OB+BtOLpJofmbGEGgvmwyCI9MwIDAQAB"
    const { publicKey, type } = did.didToPublicKey(toDecode)
    expect(publicKey).toEqual(expectedKey)
    expect(type).toEqual(KeyType.RSA)
  })

  it("handles Ed25519 Keys", async () => {
    const toDecode = "did:key:z6MkgYGF3thn8k1Fv4p4dWXKtsXCnLH7q9yw4QgNPULDmDKB"
    const expectedKey = "Hv+AVRD2WUjUFOsSNbsmrp9fokuwrUnjBcr92f0kxw4="
    const { publicKey, type } = did.didToPublicKey(toDecode)
    expect(publicKey).toEqual(expectedKey)
    expect(type).toEqual(KeyType.Edwards)
  })

  it("handles BLS12-381 Keys", async () => {
    const toDecode = "did:key:z6HpYD1br5P4QVh5rjRGAkBfKMWes44uhKmKdJ6dN2Nm9gHK"
    const expectedKey = "Hv+AVRD2WUjUFOsSNbsmrp9fokuwrUnjBcr92f0kxw4="
    const { publicKey, type } = did.didToPublicKey(toDecode)
    expect(publicKey).toEqual(expectedKey)
    expect(type).toEqual(KeyType.BLS)
  })

})